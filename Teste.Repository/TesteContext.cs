using Microsoft.EntityFrameworkCore;
using Teste.Domain;

namespace Teste.API.Repository
{
    public class TesteContext : DbContext
    {
        public TesteContext(DbContextOptions<TesteContext> options) : base (options) {}

        public DbSet<Dados> Dados {get;set;}
    
    }
}