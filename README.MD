add-migration Migration_1 -context IdentityManagementInfrastructure.Persistence.DbContext.AppIdentityDbContext
update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppIdentityDbContext


add-migration Migration_2 -context IdentityManagementInfrastructure.Persistence.DbContext.AppPersistedGrantDbContext
update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppPersistedGrantDbContext

add-migration Migration_3 -context IdentityManagementInfrastructure.Persistence.DbContext.AppConfigurationDbContext
update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppConfigurationDbContext


select *from "AspNetUsers"

select *from "AspNetRoles"


POST -> https://localhost:5001/connect/token