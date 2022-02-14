using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PuebaTenicaBerenice.Models
{
    public class Venta
    {
        public int Id { get; set; }
        public int ClienteID { get; set; }
        public int ServicioID { get; set; }
        public decimal valor_total { get; set; }
        public DateTime fecha_venta { get; set; }
        public Cliente Cliente { get; set; }
        public Servicio Servicio { get; set; }

    }
}
