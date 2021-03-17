function gerarCor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215) .toString(16)
    document.body.style.backgroundColor = randomColor

    var colorText = document.getElementById('colorText')
    colorText.innerText = randomColor
}