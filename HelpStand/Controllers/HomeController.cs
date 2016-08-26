using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HelpStand.Models;

namespace HelpStand.Controllers
{
    public class HomeController : Controller
    {
        public List<Organization> Organizations { get; set; }
        public List<Marker> Markers { get; set; }
        public List<InfoWindow> InfoWindows { get; set; }

        public ActionResult Index()
        {
            //string Namn = "";
            //foreach (var organization in Organizations)
            //{
            //    Namn = organization.Name;
            //}

            //foreach (var infoWindow in InfoWindows)
            //{
            //    Namn = infoWindow.Name;
            //}

            //foreach (var marker in Markers)
            //{
            //    Namn = marker.Name;
            //}

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}