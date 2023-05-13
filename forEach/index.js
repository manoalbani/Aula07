let pessoas = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 28, cidade: "Belo Horizonte" },
    { nome: "Ana", idade: 35, cidade: "Brasília" },
    { nome: "Carlos", idade: 22, cidade: "Porto Alegre" },
    { nome: "Mariana", idade: 27, cidade: "Salvador" },
    // Adicione mais objetos de pessoas aqui, se necessário
    ];
    

    // FOR
    console.log('FOR');
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];
        console.log(pessoa.nome);        
    }


    // forEach
    console.log('forEach');
    
    pessoas.forEach((x)=>{
        console.log(x.nome);
    } );

    // for each com iterador 
    pessoas.forEach((x, i)=>{
        console.log(x.nome);
        console.log(i);
    } );