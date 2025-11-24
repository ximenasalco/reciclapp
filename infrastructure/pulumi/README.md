# Pulumi Infrastructure para Reciclapp

Este directorio contiene la infraestructura de Azure desplegada con Pulumi.

## Prerrequisitos

1. **Pulumi CLI instalado**: 
   ```bash
   curl -fsSL https://get.pulumi.com | sh
   ```

2. **Azure CLI instalado y autenticado**:
   ```bash
   az login
   az account set --subscription <tu-subscription-id>
   ```

3. **Node.js y npm instalados**

## Configuración

1. **Instalar dependencias**:
   ```bash
   cd infrastructure/pulumi
   npm install
   ```

2. **Configurar la contraseña de la base de datos**:
   ```bash
   pulumi config set --secret reciclapp:dbPassword "TuContraseñaSegura123!"
   ```

   O si prefieres usar el namespace por defecto:
   ```bash
   pulumi config set --secret dbPassword "TuContraseñaSegura123!"
   ```
   
   Y luego actualiza `index.ts` para usar `config.requireSecret("dbPassword")` en lugar de `reciclappConfig.requireSecret("dbPassword")`.

3. **Configurar la ubicación (opcional)**:
   ```bash
   pulumi config set azure-native:location westus2
   ```

## Despliegue

1. **Previsualizar los cambios**:
   ```bash
   pulumi preview
   ```

2. **Desplegar la infraestructura**:
   ```bash
   pulumi up
   ```

3. **Ver los outputs**:
   ```bash
   pulumi stack output
   ```

## Recursos Creados

- **Resource Group**: `reciclapp-rg`
- **Storage Account**: Para almacenar imágenes (Blob Storage)
- **Static Web App**: Para el frontend React
- **PostgreSQL Flexible Server**: Base de datos
- **App Service Plan**: Plan para el backend
- **App Service**: Backend Node.js

## Solución de Problemas

### Error: "Storage account name is already taken"
Los nombres de storage account deben ser únicos globalmente. Cambia el nombre en `index.ts`:
```typescript
const storage = new azure.storage.StorageAccount("reciclappstorage" + pulumi.getStack(), {
  // ...
});
```

### Error: "Static Web App name is already taken"
Similar al anterior, agrega el stack al nombre:
```typescript
const staticWeb = new azure.web.StaticWebApp("reciclapp-static" + pulumi.getStack(), {
  // ...
});
```

### Error: "dbPassword not found"
Asegúrate de haber configurado el secret:
```bash
pulumi config set --secret reciclapp:dbPassword "TuContraseña"
```

### Error de permisos
Asegúrate de tener los permisos necesarios en tu suscripción de Azure:
- Contributor o Owner en el Resource Group
- Permisos para crear recursos de Azure

## Limpieza

Para eliminar todos los recursos:
```bash
pulumi destroy
```

## Notas Importantes

- El firewall de PostgreSQL está configurado para permitir todo (0.0.0.0) - **solo para desarrollo**
- En producción, configura reglas de firewall específicas
- El App Service Plan usa el tier "Basic" - considera actualizar según tus necesidades
- La contraseña de la base de datos se almacena como secreto en Pulumi

