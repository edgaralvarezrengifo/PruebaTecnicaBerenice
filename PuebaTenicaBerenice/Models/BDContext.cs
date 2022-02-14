using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace PuebaTenicaBerenice.Models
{
    public class BDContext : DbContext
    {

        public BDContext(DbContextOptions<BDContext> options)
            : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }



        public DbSet<Servicio> Servicio { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Venta> Venta { get; set; }
       
    }
}
