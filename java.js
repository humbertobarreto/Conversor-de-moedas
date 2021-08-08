let botao = document.getElementById("button")
let select = document.getElementById("select-moedas")




async function convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputvaloremreais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputreal = document.getElementById("input-real")

    if (select.value === "$ Dolar Americano") {
        let valoremdolares = inputvaloremreais / dolar
        inputMoedas.innerHTML = valoremdolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
        let valoremeuros = inputvaloremreais / euro
        inputMoedas.innerHTML = valoremeuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }

    inputreal.innerHTML = inputvaloremreais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}


function trocademoedas() {
    let textomoedas = document.getElementById("texto-moedas")
    let bandeiramoedas = document.getElementById("bandeira-moedas")

    if (select.value === "$ Dolar Americano") {
        textomoedas.innerHTML = "Dolar Americano"
        bandeiramoedas.src = "./Img/usa.png"
    }

    if (select.value === "€ Euro") {
        textomoedas.innerHTML = "Euro"
        bandeiramoedas.src = "./Img/euro.png"
    }
    convertermoedas()
}

botao.addEventListener("click", convertermoedas)
select.addEventListener("change", trocademoedas)

