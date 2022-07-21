const button = document.getElementById('convert-button')

const dolar = 5.2


const convertValues = () => {
    const inputReais = document.getElementById('input-real').value

    inputReais / dolar
}

button.addEventListener('click', convertValues)