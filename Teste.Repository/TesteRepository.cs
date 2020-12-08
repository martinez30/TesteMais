using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Teste.API.Repository;
using Teste.Domain;

namespace Teste.Repository
{
    public class TesteRepository : ITesteRepository
    {

        private readonly TesteContext _context;
        public TesteRepository(TesteContext context)
        {
            this._context = context;    
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

       //Dados
        public async Task<Dados[]> GetAllDadosAsync()
        {
            IQueryable<Dados> query = _context.Dados;

                query = query.AsNoTracking().OrderByDescending(x=> x.Nome);

                return await query.ToArrayAsync();
        }

        public async Task<Dados> GetDadosAsyncById(int DadosId)
        {
            IQueryable<Dados> query = _context.Dados;

                query = query.AsNoTracking().OrderByDescending(x=> x.Nome)
                        .Where(x=> x.Id == DadosId);

                return await query.FirstOrDefaultAsync();
        }

    }
}