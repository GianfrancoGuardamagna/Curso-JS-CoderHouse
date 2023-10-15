//// Definición de parámetros del exterior
let probabilidadLluvia
let humedadSuelo
let temperaturaSuelo
let temperaturaExterior
let uvIndice
let vientoVelocidad


async function weatherAPI() {

  let weatherStatus = "https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m,soil_temperature_0cm,soil_moisture_0_1cm,uv_index,is_day&current_weather=true&windspeed_unit=ms&timezone=America%2FSao_Paulo&forecast_days=1"

  await fetch(weatherStatus)
    .then((response) => response.json())
    .then((datos) => {
      const now = new Date()
      const hora = now.getHours()
      probabilidadLluvia = datos.hourly.precipitation_probability[hora]
      let humedadExterior = datos.hourly.relativehumidity_2m[hora]
      humedadSuelo = datos.hourly.soil_moisture_0_1cm[hora]
      temperaturaSuelo = datos.hourly.soil_temperature_0cm[hora]
      temperaturaExterior = datos.hourly.temperature_2m[hora]
      let diaNoche = datos.hourly.is_day[hora]
      uvIndice = datos.hourly.uv_index[hora]
      vientoVelocidad = datos.hourly.windspeed_10m[hora]

      let estadoProbabilidadLluvia = document.getElementById(`estadoProbabilidadLluvia`)
      let estadoHumedadExterior = document.getElementById(`estadoHumedadExterior`)
      let estadoHumedadSuelo = document.getElementById(`estadoHumedadSuelo`)
      let estadoTemperaturaSuelo = document.getElementById(`estadoTemperaturaSuelo`)
      let estadoTemperaturaExterior = document.getElementById(`estadoTemperaturaExterior`)
      let estadoDiaNoche = document.getElementById(`estadoDiaNoche`)
      let estadoUvIndice = document.getElementById(`estadoUvIndice`)
      let estadoVientoVelocidad = document.getElementById(`estadoVientoVelocidad`)

      estadoProbabilidadLluvia.innerText = (`${probabilidadLluvia}%`)
      estadoHumedadExterior.innerText = (`${humedadExterior}%`)
      estadoHumedadSuelo.innerText = (`${humedadSuelo} m³/m³`)
      estadoTemperaturaSuelo.innerText = (`${temperaturaSuelo} °C`)
      estadoTemperaturaExterior.innerText = (`${temperaturaExterior} °C`)
      estadoDiaNoche.innerText = (`${diaNoche}`)
      estadoUvIndice.innerText = (`${uvIndice}`)
      estadoVientoVelocidad.innerText = (`${vientoVelocidad} m/s`)
      if (diaNoche === 1) {
        estadoDiaNoche.src = "../img/iconoExterior1.png"
        estadoDiaNoche.innerText = ("Day")
      } else {
        estadoDiaNoche.innerText = ("Night")
        estadoDiaNoche.src = "../img/iconoExterior2.png"
      }
    })
  if (probabilidadLluvia >= 55) {
    swal("Cuidado! Hay probabilidad de lluvia", {
      icon: "warning",
      buttons: true,
    })
  }
  if (temperaturaExterior >= 29) {
    swal("Cuidado! La temperatura exterior es demasiada", {
      icon: "warning",
      buttons: true,
    })
  }
  if (temperaturaSuelo >= 27) {
    swal("Cuidado! La temperatura del suelo es muy elevada", {
      icon: "warning",
      buttons: true,
    })
  }
  if (vientoVelocidad > 7) {
    swal("Cuidado! El viento es demasiado fuerte", {
      icon: "warning",
      buttons: true,
    })
  }

  const probabilidadLluviaJson = JSON.stringify(probabilidadLluvia)
  localStorage.setItem('Probabilidad de lluvia', probabilidadLluviaJson)
  const humedadSueloJson = JSON.stringify(humedadSuelo)
  localStorage.setItem('Humedad del suelo', humedadSueloJson)
  const temperaturaSueloJson = JSON.stringify(temperaturaSuelo)
  localStorage.setItem('Humedad exterior', temperaturaSueloJson)
  const vientoVelocidadJson = JSON.stringify(vientoVelocidad)
  localStorage.setItem('Viento Velocidad', vientoVelocidadJson)
}

weatherAPI()

setInterval(weatherAPI, 3600000)

/// El setInterval tiene colocada 1 hora porque es el tiempo de actualización de la API

export {
  humedadSuelo,
  uvIndice
}