using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TargetScheduler.DataAccess.EntityContext.Enums;

namespace TargetScheduler.DataAccess.EntityContext
{
    public class COM_Agendamento
    {
        public Int32 Id { get; set; }
        public Int32 PessoaId { get; set; }
        public String Nome { get; set; }
        public COM_Pessoa Pessoa { get; set; }
        public DateTime Inicio { get; set; }
        public DateTime Termino { get; set; }
        public TipoAgendamento Tipo { get; set; }
        public String Observacao { get; set; }
    }
}
