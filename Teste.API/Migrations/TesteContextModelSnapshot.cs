﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Teste.API.Repository;

namespace Teste.API.Migrations
{
    [DbContext(typeof(TesteContext))]
    partial class TesteContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("Teste.Domain.Dados", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CPF");

                    b.Property<string>("Nome");

                    b.Property<string>("RG");

                    b.Property<string>("Telefone1");

                    b.Property<string>("Telefone2");

                    b.HasKey("Id");

                    b.ToTable("Dados");
                });
#pragma warning restore 612, 618
        }
    }
}