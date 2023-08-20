<p> add-migration Migration_1 -context IdentityManagementInfrastructure.Persistence.DbContext.AppIdentityDbContext </p> 
<p> update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppIdentityDbContext </p> 

<br/>
<br/>

<p> add-migration Migration_2 -context IdentityManagementInfrastructure.Persistence.DbContext.AppPersistedGrantDbContext  </p> 
<p> update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppPersistedGrantDbContext </p> 

<br/>
<br/>

<p> add-migration Migration_3 -context IdentityManagementInfrastructure.Persistence.DbContext.AppConfigurationDbContext </p> 
<p> update-database -context IdentityManagementInfrastructure.Persistence.DbContext.AppConfigurationDbContext </p> 


select *from "AspNetUsers"

select *from "AspNetRoles"
