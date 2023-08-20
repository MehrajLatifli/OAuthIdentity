add-migration Migration_1 -context IdentityManagementInfrastructure.Persistence.DbContext.AppIdentityDbContext

<br/>

update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppIdentityDbContext

<br/>
<br/>

add-migration Migration_2 -context IdentityManagementInfrastructure.Persistence.DbContext.AppPersistedGrantDbContext  

<br/>

update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppPersistedGrantDbContext

<br/>
<br/>

add-migration Migration_3 -context IdentityManagementInfrastructure.Persistence.DbContext.AppConfigurationDbContext

<br/>

update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppConfigurationDbContext


select *from "AspNetUsers"

select *from "AspNetRoles"
