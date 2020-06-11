using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Quizy.Data;
using System;

namespace Quizy
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDistributedMemoryCache();

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });

            services.AddCors(options =>
            {
                options.AddPolicy("DefaultPolicy", builder =>
                {
                    builder.WithOrigins("http://localhost:8080", "http://localhost:8081", "http://localhost:8082", "http://localhost:4200", "https://localhost:44313")
                    .AllowAnyMethod().AllowAnyHeader();
                });
            });

            services.AddDbContext<ApplicationDbContext>(opt =>
                 opt.UseSqlServer(Configuration.GetConnectionString("QuizyAppDb")));
            services.AddControllers().AddJsonOptions(cfg =>
            {
                cfg.JsonSerializerOptions.IgnoreNullValues = true;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("DefaultPolicy");
            app.UseSession();
            app.UseHttpsRedirection();
            app.Use(async (context, next) =>
            {
                await next();

                if (!context.Request.Path.StartsWithSegments("/api") && context.Response.StatusCode == 404)
                {
                    if (context.Request.Path.StartsWithSegments("/angular"))
                    {
                        context.Request.Path = "/angular/index.html";
                    }
                    else if (context.Request.Path.StartsWithSegments("/vue"))
                    {
                        context.Request.Path = "/vue/index.html";
                    }
                    else if (context.Request.Path.StartsWithSegments("/react"))
                    {
                        context.Request.Path = "/react/index.html";
                    }
                    else
                    {
                        context.Request.Path = "/index.html";
                    }

                    await next();
                }
            });
            app.UseRouting();
            app.UseAuthorization();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                   name: "default",
                   pattern: "api/{controller}/{action=Index}/{id?}"
                );
            });


        }
    }
}
