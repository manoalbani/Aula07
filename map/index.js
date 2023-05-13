const carros = [
    { valor:10000, marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata" },
    { valor:10000, marca: "Honda", modelo: "Civic", ano: 2019, cor: "Branco" },
    {  valor:10000,marca: "Volkswagen", modelo: "Golf", ano: 2021, cor: "Azul" },
    {  valor:10000,marca: "Ford", modelo: "Mustang", ano: 2022, cor: "Vermelho" },
    {  valor:10000,marca: "Chevrolet", modelo: "Camaro", ano: 2020, cor: "Amarelo" },
    {  valor:10000, marca: "BMW", modelo: "X5", ano: 2018, cor: "Preto" },
    // Adicione mais objetos de carro aqui, se necessário
    ];

    
// MAP

carros.map(x=>x.marca).forEach(x=> console.log(x));

carros.map((x) => {
    x.valor = `R$ ${x.valor}`
    return x;
}).forEach(x=>console.log(x));

let modelos = carros.map(x=>x.modelo);
console.log(JSON.stringify(modelos));