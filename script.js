let chave = "dfd03f28e2821da6d43e650674dadd87"

function colocarNaTela(dados){
  console.log(dados)

  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "ºC"
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
  document.querySelector(".nuvem").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
   
}

async function buscarCidade(cidade) {
  const dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
    "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric",).then((resposta) => resposta.json())

    colocarNaTela(dados)
}

function cliqueiNoBotao() {

  const cidade = document.querySelector(".input-cidade").value

  buscarCidade(cidade)
  
}




