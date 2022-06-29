//objetos literais
let pais = {
    nome:"Brasil",
    capital:"Brasília",
    nacionalidade:function(){
        return "Sou do "+this.nome;
    },
};

let carro = {
    marca: "Fiat",
    modelo:"Uno",
};
function Carro(valorMarca, valorModelo){
    this.marca = valorMarca;
    this.modelo = valorModelo;
}
console.log(carro);

console.log(new Carro("Renault","Clio"));