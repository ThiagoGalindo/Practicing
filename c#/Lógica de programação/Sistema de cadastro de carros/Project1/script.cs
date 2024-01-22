using System;
using System.Collections.Generic;

public class Carro
{
    public string marca;
    public string modelo;
    public int ano;
    public int id;

    public override string ToString()
    {
        return $"Marca: {marca} \nModelo: {modelo} \nAno: {ano} \nid: {id}";
    }
}

namespace Project1
{
    internal class Script
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
                Carro novoCarro = new Carro { marca = marcaObjeto, modelo = modeloObjeto, ano = anoObjeto, id = (lista.Count + 1) };
                lista.Add(novoCarro);
                Console.WriteLine("");
                Console.WriteLine("Carro adicionado com sucesso!");
                Console.WriteLine("");
            }
            void MostrarListaDeCarros(List<Carro> lista)
            {
                for (int i = 0; i < lista.Count; i++)
                {
                    Console.WriteLine("");
                    Console.WriteLine(listaDeCarros[i]);
                    Console.WriteLine("");
                }
            }
            void RemoverCarro(List<Carro> lista)
            {
                Console.WriteLine("Informe o ID do Carro que deseja remover da lista: ");
                string input = Console.ReadLine();
                if (int.TryParse(input, out int perguntarID))
                {
                    int cont = 0;
                    for (int i = 0; i < lista.Count; i++)
                    {
                        if ((perguntarID) == lista[i].id)
                        {
                            lista.Remove(lista[i]);
                            Console.WriteLine("");
                            Console.WriteLine("Carro removido com sucesso!");
                            Console.WriteLine("");
                            cont++;
                        }

                    }
                    if (cont == 0)
                    {
                        Console.WriteLine("");
                        Console.WriteLine("O ID informado não pertence a nenhum carro da lista. ");
                        Console.WriteLine("");
                    }
                }
                else
                {
                    Console.WriteLine("");
                    Console.WriteLine("Informe um id válido. ");
                    Console.WriteLine("");
                }
            }
            string PerguntarOpcao()
            {
                Console.WriteLine("     Concessionária     ");
                Console.WriteLine("Informe a opção desejada \n1 - Adicionar um carro \n2 - Mostrar a lista de carros \n3 - Remover um carro \n4 - Sair");
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
                        case "2":
                            MostrarListaDeCarros(listaDeCarros);
                            break;
                        case "3":
                            RemoverCarro(listaDeCarros);
                            break;
                    }
                } while (opcao != "4");
            }
            FluxoDeFuncionamento();
        }
    }
}
