using Microsoft.AspNetCore.Mvc;

namespace Mission5Assignment.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(); // This loads Index.cshtml
        }

        public IActionResult SecondView()
        {
            return View(); // This loads SecondView.cshtml
        }
    }
}
