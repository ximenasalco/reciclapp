import * as pulumi from "@pulumi/pulumi";
import * as azure from "@pulumi/azure-native";
import * as postgres from "@pulumi/azure-native";

const config = new pulumi.Config();
const dbPassword = config.requireSecret("dbPassword");

const location = config.get("location") || "centralus";

// -----------------------------
// Resource Group
// -----------------------------
const rg = new azure.resources.ResourceGroup("reciclapp-rg", {
  location,
});

// -----------------------------
// Storage Account
// -----------------------------
const storage = new azure.storage.StorageAccount("reciclappstorage", {
  resourceGroupName: rg.name,
  location: rg.location,
  kind: "StorageV2",
  sku: { name: "Standard_LRS" },
  accessTier: "Hot",
  allowBlobPublicAccess: true,
  minimumTlsVersion: azure.storage.MinimumTlsVersion.TLS1_2,
});

// Blob Container
const container = new azure.storage.BlobContainer("imagenes", {
  accountName: storage.name,
  containerName: "imagenes",
  resourceGroupName: rg.name,
  publicAccess: azure.storage.PublicAccess.Blob,
});

// -----------------------------
// PostgreSQL SERVER (Single Server - Compatible)
// -----------------------------
const postgresql = new azure.dbforpostgresql.Server("reciclapp-db", {
  resourceGroupName: rg.name,
  location: rg.location,

  version: "14", // 11 ya ni existe en flexible
  administratorLogin: "adminuser",
  administratorLoginPassword: dbPassword,

  storage: {
    storageSizeGB: 32, // OBLIGATORIO
  },

  sku: {
    name: "Standard_B1ms",
    tier: "Burstable",
  },

  highAvailability: {
    mode: "Disabled",
  },

  backup: {
    backupRetentionDays: 7,
    geoRedundantBackup: "Disabled",
  },

  network: {
    publicNetworkAccess: "Enabled",
  },
});

// Firewall Rule para permitir todas las IPs (solo para desarrollo)
new azure.dbforpostgresql.FirewallRule("AllowAll", {
  resourceGroupName: rg.name,
  serverName: postgresql.name,
  startIpAddress: "0.0.0.0",
  endIpAddress: "255.255.255.255",
  firewallRuleName: "AllowAll",
});

// -----------------------------
// App Service Plan
// -----------------------------
const plan = new azure.web.AppServicePlan("reciclapp-plan", {
  resourceGroupName: rg.name,
  location: rg.location,
  kind: "Linux",
  reserved: true,
  sku: { name: "F1", tier: "Free" },
});

// -----------------------------
// Web App
// -----------------------------
const app = new azure.web.WebApp("reciclapp-backend", {
  resourceGroupName: rg.name,
  location: rg.location,
  serverFarmId: plan.id,
  kind: "app,linux",

  siteConfig: {
    linuxFxVersion: "NODE|18-lts",
    appSettings: [
      {
        name: "DATABASE_URL",
        value: pulumi.interpolate`postgresql://adminuser:${dbPassword}@${postgresql.fullyQualifiedDomainName}:5432/postgres?sslmode=require`,
      },
      { name: "NODE_ENV", value: "production" },
      { name: "PORT", value: "3000" },
    ],
  },

  httpsOnly: true,
});

// -----------------------------
// Export outputs
// -----------------------------
export const resourceGroupName = rg.name;
export const blobUrl = pulumi.interpolate`https://${storage.name}.blob.core.windows.net/${container.name}`;
export const backendUrl = pulumi.interpolate`https://${app.defaultHostName}`;
export const postgresHost = postgresql.fullyQualifiedDomainName;
export const postgresConnectionString = pulumi.interpolate`postgresql://adminuser:${dbPassword}@${postgresql.fullyQualifiedDomainName}:5432/postgres?sslmode=require`;
