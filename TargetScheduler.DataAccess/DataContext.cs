using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TargetScheduler.DataAccess.EntityContext;

namespace TargetScheduler.DataAccess
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<COM_Pessoa> COM_Pessoas { get; set; }
        public DbSet<COM_Agendamento> COM_Agendamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=.;database=TargetScheduler;trusted_connection=true;");
        }
    }
}
