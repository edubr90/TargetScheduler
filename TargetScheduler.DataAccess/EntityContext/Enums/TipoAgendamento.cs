using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TargetScheduler.DataAccess.EntityContext.Enums
{
    public enum TipoAgendamento
    {
        [Display(Name = "Novo")]
        Novo = 0,
        [Display(Name = "Retorno")]
        Retorno = 1
    }
}
