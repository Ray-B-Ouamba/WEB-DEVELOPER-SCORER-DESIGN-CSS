let total = 0

document.querySelector('#webDevScore').addEventListener('click', scoreZero)
document.querySelector('#html').addEventListener('click', scoreHtml)
document.querySelector('#css').addEventListener('click', scoreCss)
document.querySelector('#javaScript').addEventListener('click', scoreJavaScript)

function scoreZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function scoreHtml() {
  total = total + 10
  document.querySelector('#placeToPutResult').innerText = total
}

function scoreCss() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerHTML = total
}

function scoreJavaScript() {
  total = total + 20
  document.querySelector('#placeToPutResult').innerHTML = total
}
