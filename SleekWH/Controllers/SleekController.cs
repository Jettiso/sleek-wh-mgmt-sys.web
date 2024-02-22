
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
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
        [EnableCors("Localhost")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemModel>>> GetItems()
        {
            var items = await _sleekcontext.ItemModels.ToListAsync();

            return Ok(items);
        }
        
        [EnableCors("Localhost")]
        [HttpPost]
        public async Task<IActionResult> PostItem([FromBody] ItemModel item)
        {
            _sleekcontext.ItemModels.Add(item);
            await _sleekcontext.SaveChangesAsync();

            return Ok(item);
        }
    }
}