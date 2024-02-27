
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SleekWH.Data;
using SleekWH.Models;


namespace sleekWH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SleekController : ControllerBase
    {
        private readonly SleekContext _sleekcontext;

        public SleekController(SleekContext sleekcontext)
        {
            _sleekcontext = sleekcontext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemModel>>> GetItems()
        {
            var items = await _sleekcontext.ItemModels.ToListAsync();

            return Ok(items);
        }
    }
}