const resultado = document.getElementById("resultado");
const btnMostrar = document.getElementById("btnMostrar");


function ExibirCarro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.detalhesCarro = function() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

btnMostrar.addEventListener("click", function() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;

    const carro = new ExibirCarro(marca, modelo, ano);

    resultado.textContent = carro.detalhesCarro();
});

