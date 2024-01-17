using System;
using System.Collections.Generic;

public class Carro
{
    public string marca;
    public string modelo;
    public int ano;

    public override string ToString()
    {
        return $"marca: {marca} \nModelo: {modelo} \nAno: {ano}";
    }
}

namespace Project1
{
    internal class aula1
    {
        public static void Main(string[] args)
        {
            var listaDeCarros = new List<Carro>();

            void AdicionarCarro(List<Carro> lista)
            {
                Console.WriteLine("Marca: ");
                var marcaObjeto = Console.ReadLine();
                Console.WriteLine("Modelo: ");
                var modeloObjeto = Console.ReadLine();
                Console.WriteLine("Ano: ");
                var anoObjeto = int.Parse(Console.ReadLine());
                Carro novoCarro = new Carro { marca = marcaObjeto, modelo = modeloObjeto, ano = anoObjeto };
                lista.Add(novoCarro);
                Console.WriteLine("Carro adicionado com sucesso!");
            }
            void MostrarListaDeCarros(List<Carro> lista)
            {
                for(int i = 0; i < lista.Count; i++) 
                {
                    Console.WriteLine("");
                    Console.WriteLine(listaDeCarros[i]);
                    Console.WriteLine("");
                }
            }

            string PerguntarOpcao()
            {
                Console.WriteLine("     Concessionária     ");
                Console.WriteLine("Informe a opção desejada \n1 - Adicionar um carro \n3 - Mostrar a lista de carros \n4 - Sair");
                var opcao = Console.ReadLine();
                return opcao;
            }

            void FluxoDeFuncionamento()
            {
                string opcao;
                do
                {
                    opcao = PerguntarOpcao();
                    switch (opcao)
                    {
                        case "1":
                            AdicionarCarro(listaDeCarros);
                            break;
                        case "3":
                            MostrarListaDeCarros(listaDeCarros);
                            break;
                    }
                } while (opcao != "4");
            }
            FluxoDeFuncionamento();
        }
    }
}
