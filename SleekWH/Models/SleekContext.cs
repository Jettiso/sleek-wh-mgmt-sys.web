
using SleekWH.Models;
using Microsoft.EntityFrameworkCore;

namespace SleekWH.Data
{
    public class SleekContext : DbContext
    {
        public SleekContext(DbContextOptions<SleekContext> options) : base(options)
        {
            
        }

        public DbSet<ItemModel> ItemModels { get; set; }
    }
}