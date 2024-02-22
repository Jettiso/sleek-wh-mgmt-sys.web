using Microsoft.EntityFrameworkCore;
using SleekWH.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("MySQLConnection");
builder.Services.AddDbContext<SleekContext>(options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
	options.AddPolicy("Localhost",
		policy =>
		{
			policy.WithOrigins("http://localhost:5173/").AllowAnyHeader().AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
		});
});


var app = builder.Build();


app.UseHttpsRedirection();
app.MapControllers();


app.Run();
