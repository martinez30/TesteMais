using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Teste.Domain;
using Teste.Repository;

namespace Teste.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DadosController : ControllerBase
    {
        private readonly ITesteRepository _repository;

        public DadosController(ITesteRepository repository)
        {
            _repository = repository;
        }        

        [HttpGet]
        public async Task<IActionResult> Get(){
            try
            {
                var results = await  _repository.GetAllDadosAsync();
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }

          [HttpGet("{DadosId}")]
        public async Task<IActionResult> Get(int DadosId){
            try
            {
                var results = await  _repository.GetDadosAsyncById(DadosId);
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }
        }

          [HttpPost]
        public async Task<IActionResult> Post(Dados model){
            try
            {
                _repository.Add(model);

                if(await _repository.SaveChangesAsync())
                    return Created($"/api/Dados/{model.Id}", model);
                
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

            return BadRequest();
        }

            [HttpPut("{DadosId}")]
        public async Task<IActionResult> Put(int DadosId, Dados model){
            try
            {
                var Dados = await _repository.GetDadosAsyncById(DadosId);
                if(Dados is null) return NotFound();

                _repository.Update(model);
                
                if(await _repository.SaveChangesAsync()){
                    return Ok();
                }
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de dados falhou");
            }

            return BadRequest();
        }

    }
}