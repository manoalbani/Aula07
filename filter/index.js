let pessoas = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 28, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 35, cidade: "Brasília" },
    { nome: "Carlos", idade: 22, cidade: "Porto Alegre" },
    { nome: "Mariana", idade: 28, cidade: "Salvador" },
    // Adicione mais objetos de pessoas aqui, se necessário
    ];


    //filter

    pessoas.filter(x=>x.idade>=26).forEach(x=> console.log(x.nome));