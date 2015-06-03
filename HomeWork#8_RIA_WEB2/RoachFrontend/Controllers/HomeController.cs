using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using RoachFrontend.Models;

namespace RoachFrontend.Controllers
{
    public class HomeController : Controller
    {
        private static UserStat UserData;
        private static List<UserStat> statistics = new List<UserStat>(); 
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Transfer(string data)
        {
            UserData = JsonConvert.DeserializeObject<UserStat>(data);
            return Content("Чек сформирован");
        }

        public ActionResult About()
        {
            ViewData["user"] = UserData.UserId;
            ViewData["money"] = UserData.Money;
            ViewData["gameDate"] = UserData.Date;
            return View();
        }

        public ActionResult Manage()
        {
            return View();
        }

        public ActionResult Stats()
        {
            var data = JsonConvert.SerializeObject(new
            {
                stats = statistics,
                success = true
            });
            return Content(data);
        }

        public ActionResult SaveStats(string data)
        {
            var userStat = JsonConvert.DeserializeObject<UserStat>(data);
            var k = -1;
            try { k = statistics.FindIndex(x => x.UserId == userStat.UserId); }
            catch { k = 1; }
            if (k != -1)    {
                userStat.Money += statistics[k].Money;
                statistics[k] = userStat;
            }
            else statistics.Add(userStat);
            return Content("Результаты отправлены на сервер.");
        }
    }
}