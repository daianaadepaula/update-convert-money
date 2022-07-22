const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.45
const euro = 5.55


const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

        if(select.value === "US$ Dólar americano") {
            currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(inputReais / dolar)
        }
    
        if(select.value === "€ Euro") {
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(inputReais / euro)
        }  
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    const currencyValueText = document.getElementById('currency-value-text')

        if(select.value === 'US$ Dólar americano'){
            currencyName.innerHTML = "Dólar americano"
            currencyImg.src = './assets/eua.svg'
            currencyValueText.innerHTML = 'US$ 0.00'
        }

        if(select.value === '€ Euro'){
            currencyName.innerHTML = "Euro"
            currencyImg.src = './assets/euro.svg'
            currencyValueText.innerHTML = '€ 0.00'
        }

    convertValues()       
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)