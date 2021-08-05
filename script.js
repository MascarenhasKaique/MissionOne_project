
let botao = document.getElementById("button")
let select = document.getElementById("select-moedas")


async function converterMoedas() {
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    console.log(dolar)
    console.log(euro)

    let inputValorEmReais = Number(document.getElementById("input").value)
    let textoMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
    let ValorEmDolares = inputValorEmReais / dolar
    textoMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
    let ValorEmEuros = inputValorEmReais / euro
        textoMoedas.innerHTML = ValorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

}


function TrocaDeMoedas() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/estados-unidos (1) 1.png"

    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/Euro.png"

    }
    converterMoedas()
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", TrocaDeMoedas)