using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TargetScheduler.DataAccess.EntityContext
{
    public class COM_Pessoa
    {
        public Int32 Id { get; set; }
        [Required]
        public String Nome { get; set; }
        public DateTime DataNascimento { get; set; }
    }
}
