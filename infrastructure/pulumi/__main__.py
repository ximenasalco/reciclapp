import pulumi
from pulumi_azure_native import resources, storage, sql, web

# Configuración segura para la contraseña del servidor SQL
config = pulumi.Config()
admin_password = config.require_secret("sqlPassword")  # Se guarda como secreto en Pulumi

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
    administrator_login_password=admin_password,
    version="12.0"
)

# Crear una base de datos SQL
database = sql.Database(
    "EcoScanDB",
    resource_group_name=resource_group.name,
    server_name=server.name,
    sku=sql.SkuArgs(name="Basic", tier="Basic")
)

# Crear un App Service Plan (para alojar la app web)
app_service_plan = web.AppServicePlan(
    "ecoapp-plan",
    resource_group_name=resource_group.name,
    sku=web.SkuDescriptionArgs(tier="Free", name="F1")
)

# Crear la aplicación web (App Service)
web_app = web.WebApp(
    "ecoapp",
    resource_group_name=resource_group.name,
    server_farm_id=app_service_plan.id
)

# Exportar la URL de la aplicación
pulumi.export("webAppUrl", web_app.default_host_name)
