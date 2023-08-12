using IdentityManagement.ServerAPI.Models;
using IdentityManagement.ServerAPI.Models.IdentityManagement.ServerAPI.Models;
using IdentityManagementInfrastructure.Persistence;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace IdentityManagement.ServerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = UserRoles.Admin)]
    public class DataController : Controller
    {
        private readonly UserManager<AppUser> _userManager;

        public DataController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet("getusers")]
        public async Task<IActionResult> GetUsersWithRoles()
        {
            var adminUsers = await _userManager.GetUsersInRoleAsync(Models.IdentityManagement.ServerAPI.Models.UserRoles.Admin);

            var adminUserList = adminUsers.Select(user => new
            {
                user.Id,
                user.UserName,
                user.Email,
                user.Roles,
            }).ToList();

            return Ok(adminUserList);
        }

    }
}
