
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
        private readonly SleekContext _apicontext;

        public SleekController(SleekContext apicontext)
        {
            _apicontext = apicontext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemModel>>> GetSleeks()
        {
            var items = await _apicontext.ItemModels.ToListAsync();

            return Ok(items);
        }
        
        
    }
}
