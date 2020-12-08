using System.Threading.Tasks;
using Teste.Domain;

namespace Teste.Repository
{
    public interface ITesteRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //Dados
        Task<Dados[]> GetAllDadosAsync();
        Task<Dados> GetDadosAsyncById(int DadosId);

    }
}