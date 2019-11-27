using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TargetScheduler.DataAccess;
using TargetScheduler.DataAccess.EntityContext;

namespace TargetScheduler.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgendamentoController : ControllerBase
    {
        private readonly IDataRepository _repository;
        public AgendamentoController(IDataRepository repository)
        {
            _repository = repository;
        }
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var results =  _repository.GetAllAgendamentos();
            return Ok(results);
        }

        [HttpGet("Get/{Id}")]
        public IActionResult Get(int id)
        {
            var results = _repository.GetAgendamentoPorId(id);
            return Ok(results);
        }

        [HttpGet("GetPorNome/{textoBusca}")]
        public IActionResult GetPorNome(string textoBusca)
        {
            var results = _repository.GetAllAgendamentos().Where(a => a.Nome.Contains(textoBusca) || a.Pessoa.Nome.Contains(textoBusca));
            return Ok(results);
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody] COM_Agendamento entity)
        {
            _repository.Add(entity);
            _repository.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut]
        public void Put([FromBody] COM_Agendamento entity)
        {
            _repository.Update(entity);
            _repository.SaveChanges();
        }

        // DELETE api/values/5
        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            var entityPrincipal = _repository.GetAgendamentoPorId(id);
            var entityRelacionada = entityPrincipal.Pessoa;

            _repository.Delete(entityPrincipal);
            _repository.Delete(entityRelacionada);
            _repository.SaveChanges();

            return Ok(true);
        }
    }
}
