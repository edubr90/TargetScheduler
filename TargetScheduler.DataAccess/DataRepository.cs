using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TargetScheduler.DataAccess.EntityContext;

namespace TargetScheduler.DataAccess
{
    public class DataRepository : IDataRepository
    {
        private readonly DataContext _db;
        public DataRepository(DataContext dataContext)
        {
            _db = dataContext;
        }
        public void Add<T>(T entity) where T : class
        {
            _db.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _db.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _db.Remove(entity);
        }

        public COM_Agendamento GetAgendamentoPorId(int agendamentoId)
        {
            return
                _db.COM_Agendamentos.Include(x => x.Pessoa).FirstOrDefault(a => a.Id == agendamentoId);
                    
        }

        public COM_Agendamento[] GetAllAgendamentos()
        {
            return _db.COM_Agendamentos.Include(x => x.Pessoa).ToArray();
        }

        public COM_Pessoa[] GetAllPessoas()
        {
            return _db.COM_Pessoas.ToArray();
        }

        public COM_Pessoa[] GetAllPessoasPorNome(string nome)
        {
            return _db.COM_Pessoas.Where(p => p.Nome.Contains(nome)).ToArray();
        }

        public COM_Pessoa GetPessoaPorId(int pessoaId)
        {
            return _db.COM_Pessoas.FirstOrDefault(p => p.Id == pessoaId);
        }

        public bool SaveChanges()
        {
            try
            {
                _db.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw new InvalidOperationException(ex.Message);
            }
        }


    }
}
