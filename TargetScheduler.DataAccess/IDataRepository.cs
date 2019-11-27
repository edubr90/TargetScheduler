using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TargetScheduler.DataAccess.EntityContext;

namespace TargetScheduler.DataAccess
{
    public interface IDataRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        bool SaveChanges();

        COM_Pessoa[] GetAllPessoasPorNome(string nome);
        COM_Pessoa GetPessoaPorId(int pessoaId);
        COM_Pessoa[] GetAllPessoas();

        COM_Agendamento[] GetAllAgendamentos();
        COM_Agendamento GetAgendamentoPorId(int agendamentoId);

    }
}
