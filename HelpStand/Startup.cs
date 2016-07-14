using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HelpStand.Startup))]
namespace HelpStand
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
