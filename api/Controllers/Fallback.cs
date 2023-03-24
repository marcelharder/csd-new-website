using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class Fallback : Controller
    {
       private readonly IWebHostEnvironment _env;
       
       public Fallback(IWebHostEnvironment env)
       {
           _env = env;
       }
       
       public IActionResult Index()
       {
           var filePath = Path.Combine(_env.ContentRootPath, "wwwroot", "index.html");
           return PhysicalFile(filePath, "text/html");
       }
       
    }
}
