function calcular(){
  var valorAltura = document.getElementById("altura")
  var valorMassa = document.getElementById("massa")
  let mostrarResultado = document.getElementById("resultado")


  var valorSomaAltura = parseFloat(valorAltura.value)
  var valorSomaMassa =  parseFloat(valorMassa.value)
  resultadoIMC = valorSomaMassa / valorSomaAltura**2

  valorMassa.style.border = ""
  valorAltura.style.border = ""
  mostrarResultado.innerHTML = ""
  mostrarResultado.style.display = "none";

  if(valorAltura.value == ""){
    mostrarResultado.innerHTML = "Por favor preecha o campo 'Altura' <br>"
    mostrarResultado.style.display = "block"
    mostrarResultado.style.color = "red"
    valorAltura.style.border = "1px solid red"
  }
  if(valorMassa.value == ""){
    mostrarResultado.innerHTML += "Por favor preecha o campo 'Massa'"
    mostrarResultado.style.display = "block"
    mostrarResultado.style.color = "red"
    valorMassa.style.border = "1px solid red"
  }  
  if(valorAltura.value && valorMassa.value){
    mostrarResultado.innerHTML = `Seu IMC é: ${resultadoIMC.toFixed(2)} <br>`
    mostrarResultado.style.display = "block"
    valorMassa.style.border = "1px solid green"
    valorAltura.style.border = "1px solid green"

  }

  if(resultadoIMC < 18.5){
    mostrarResultado.innerHTML += "Você é está com o IMC: ABAIXO DO PESO"
  }else if(resultadoIMC > 18.5 && resultadoIMC <= 24.90){
    mostrarResultado.innerHTML += "Você é está com o IMC: NORMAL"
  }else if(resultadoIMC > 25 && resultadoIMC <= 29.90){
    mostrarResultado.innerHTML += "Você é está com o IMC: SOBREPESO"
  }else if(resultadoIMC > 30 && resultadoIMC <= 39.90){
    mostrarResultado.innerHTML += "Você é está com o IMC: OBESIDADE"
  }else if(resultadoIMC >= 40){
    mostrarResultado.innerHTML += "Você é está com o IMC: OBESIDADE GRAVE"
  }

}

function mudarEscuro(){
  let titulo = document.getElementById("titulo")
  let mostrarResultado = document.getElementById("resultado")
  let body = document.getElementById("cor")
  let borda = document.getElementById("cores")

  body.style.backgroundColor = "rgb(24, 23, 23)"
  body.style.color = "white"
  borda.style.border ="1px solid white"
  mostrarResultado.style.color = "white"
  titulo.style.borderBottom = "1px solid white"
}
function mudarClaro(){
  let titulo = document.getElementById("titulo")
  let mostrarResultado = document.getElementById("resultado")
  let body = document.getElementById("cor")
  let borda = document.getElementById("cores")

  body.style.backgroundColor = "white"
  body.style.color = "black"
  borda.style.border ="1px solid black"
  mostrarResultado.style.color = "black"
  titulo.style.borderBottom = "1px solid black"
}

