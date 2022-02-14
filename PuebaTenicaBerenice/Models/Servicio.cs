using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PuebaTenicaBerenice.Models
{
    public class Servicio
    {
        public int Id { get; set; }
        public string nombre_servicio { get; set; }
        public string descripcion_servicio { get; set; }
        public decimal valor_unitario { get; set; }
        public DateTime fecha_creacion { get; set; }
    }
}
