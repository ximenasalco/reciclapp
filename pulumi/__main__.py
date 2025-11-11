import pulumi
from pulumi_azure_native import resources, web, sql, storage

# Crear un grupo de recursos
resource_group = resources.ResourceGroup("eco-rg")

# Crear una cuenta de almacenamiento
storage_account = storage.StorageAccount(
    "ecostorage",
    resource_group_name=resource_group.name,
    sku=storage.SkuArgs(name="Standard_LRS"),
    kind="StorageV2"
)

# Crear un servidor SQL
server = sql.Server(
    "ecosqlserver",
    resource_group_name=resource_group.name,
    administrator_login="adminuser",
    administrator_login_password="password123!",
    version="12.0"
)

# Crear una base de datos
database = sql.Database(
    "EcoScanDB",
    resource_group_name=resource_group.name,
    server_name=server.name,
    sku=sql.SkuArgs(name="Basic", tier="Basic")
)

# Crear un App Service Plan (hosting)
app_service_plan = web.AppServicePlan(
    "ecoapp-plan",
    resource_group_name=resource_group.name,
    sku=web.SkuDescriptionArgs(tier="Free", name="F1")
)

# Crear la app web
web_app = web.WebApp(
    "ecoapp",
    resource_group_name=resource_group.name,
    server_farm_id=app_service_plan.id
)

# Exportar la URL final
pulumi.export("webAppUrl", web_app.default_host_name)
