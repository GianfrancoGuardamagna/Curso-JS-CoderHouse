// Definición de parámetros del espacio de cultivo

let ambiente = {
  humedadNecesaria: 60,
  temperaturaNecesaria: 24,
  vientoNecesario: 13,
}

let tanqueAgua = {
  phAgua: 4,
  ecAgua: 11,
}

// Funcionamiento de variables del entorno

setInterval(function () {

  let humedadAmbiente = Math.ceil(Math.random() * (86 - 25) + 25)
  let temperaturaAmbiente = Math.ceil(Math.random() * (40 - 13) + 13)
  let vientoAmbiente = Math.ceil(Math.random() * 100)
  let phAguaTanque = Math.ceil(Math.random() * (14 - 1) + 1)
  let ecAguaTanque = Math.ceil(Math.random() * (11 - 1) + 1)

  let resultadosHumedad = document.getElementById(`ambienteResultadosHumedad`)
  let resultadosTanque = document.getElementById(`ambienteResultadosTanque`)
  let resultadosTemperatura = document.getElementById(`ambienteResultadosTemperatura`)
  let resultadosViento = document.getElementById(`ambienteResultadosViento`)

  resultadosHumedad.textContent = (humedadAmbiente + "%")
  resultadosTanque.textContent = (phAguaTanque + "pH " + ecAguaTanque + "eC")
  resultadosTemperatura.textContent = (temperaturaAmbiente + "°C")
  resultadosViento.textContent = (vientoAmbiente + " m/h")

  let estadoHumedad = document.getElementById(`ambienteHumedadEstado`)
  let estadoTanque = document.getElementById(`ambienteTanqueEstado`)
  let estadoTemperatura = document.getElementById(`ambienteTemperaturaEstado`)
  let estadoViento = document.getElementById(`ambienteVientoEstado`)

  if ((humedadAmbiente - ambiente.humedadNecesaria) <= 70 && (humedadAmbiente - ambiente.humedadNecesaria) >= 40) {
    estadoHumedad.innerText = ("La humedad del ambiente está bien")
  } if ((humedadAmbiente - ambiente.humedadNecesaria) > 70 || (humedadAmbiente - ambiente.humedadNecesaria) < 40) {
    estadoHumedad.innerText = ("Corregir la humedad del ambiente")
  }

  if ((temperaturaAmbiente - ambiente.temperaturaNecesaria) <= 25 && (temperaturaAmbiente - ambiente.temperaturaNecesaria) >= 18) {
    estadoTemperatura.innerText = ("La temperatura del ambiente está bien")
  } if ((temperaturaAmbiente - ambiente.temperaturaNecesaria) > 25 || (temperaturaAmbiente - ambiente.temperaturaNecesaria) < 18) {
    estadoTemperatura.innerText = ("Corregir la temperatura del ambiente")
  }

  if ((vientoAmbiente - ambiente.vientoNecesario) <= 40 && (vientoAmbiente - ambiente.vientoNecesario) >= 10) {
    estadoViento.innerText = ("El viento del ambiente está bien")
  } if ((vientoAmbiente - ambiente.vientoNecesario) > 40 || (vientoAmbiente - ambiente.vientoNecesario) < 10) {
    estadoViento.innerText = ("Corregir viento del ambiente")
  }

  let pH = ("")
  let eC = ("")

  if ((phAguaTanque - tanqueAgua.phAgua) >= 6 && (phAguaTanque - tanqueAgua.phAgua) <= 7) {
    pH = ("El pH del agua del tanque está bien")
  } if ((phAguaTanque - tanqueAgua.phAgua) < 6 || (phAguaTanque - tanqueAgua.phAgua) > 7) {
    pH = ("Corregir el pH del agua del tanque")
  }

  if ((ecAguaTanque - tanqueAgua.ecAgua) >= 6 && (ecAguaTanque - tanqueAgua.ecAgua) <= 7) {
    eC = ("la eC del agua del tanque está bien")
  } if ((ecAguaTanque - tanqueAgua.ecAgua) < 6 || (ecAguaTanque - tanqueAgua.ecAgua) > 7) {
    eC = ("corregir la eC del agua del tanque")
  }

  estadoTanque.innerText = (pH + " y " + eC)

  //Registro de ultimas mediciones
  const humedadAmbienteJson = JSON.stringify(humedadAmbiente)
  localStorage.setItem('Humedad del Ambiente', humedadAmbienteJson)
  const temperaturaAmbienteJson = JSON.stringify(temperaturaAmbiente)
  localStorage.setItem('Temperatura del Ambiente', temperaturaAmbienteJson)
  const vientoAmbienteJson = JSON.stringify(vientoAmbiente)
  localStorage.setItem('Viento del Ambiente', vientoAmbienteJson)
}, 10000)

// Funcionamiento de variables de la maceta

setInterval(
  function variablesMaceta() {

    let humedadMaceta = Math.ceil(Math.random() * (50 - 1) - 1)
    let lumensMaceta = Math.ceil(Math.random() * (50 - 4) - 4)
    let tolerancia = 25

    class Planta {
      constructor(humedad, lumens) {
        this.humedad = humedad
        this.lumens = lumens
      }

      controlHumedad() {
        if (Math.abs(this.humedad - humedadMaceta) <= tolerancia) {
          return `Estoy bien de humedad`;
        } else {
          return `Necesito revisión de humedad`;
        }
      }

      controlLumens() {
        if (Math.abs(this.lumens - lumensMaceta) <= tolerancia) {
          return `estoy bien de luz`;
        } else {
          return `necesito revisión de luz`;
        }
      }
    }

    plantaUno = new Planta(15, 10)
    plantaDos = new Planta(25, 20)
    plantaTres = new Planta(35, 30)

    const macetaUno = document.getElementById(`estadoPlantaUno`)
    const macetaDos = document.getElementById(`estadoPlantaDos`)
    const macetaTres = document.getElementById(`estadoPlantaTres`)
    /*
    const macetaCuatro = document.getElementById(`estadoPlantaCuatro`)
    const macetaCinco = document.getElementById(`estadoPlantaCinco`)
    const macetaSeis = document.getElementById(`estadoPlantaSeis`)
    const macetaSiete = document.getElementById(`estadoPlantaSiete`)
    const macetaOcho = document.getElementById(`estadoPlantaOcho`)
    const macetaNueve = document.getElementById(`estadoPlantaNueve`)
    const macetaDiez = document.getElementById(`estadoPlantaDiez`)
    */


    macetaUno.innerText = (plantaUno.controlHumedad() + " y " + plantaUno.controlLumens())
    macetaDos.innerText = (plantaDos.controlHumedad() + " y " + (plantaDos.controlLumens()))
    macetaTres.innerText = (plantaTres.controlHumedad() + " y " + (plantaTres.controlLumens()))
    /*
    macetaCuatro.innerText = (plantaCuatro.controlHumedad() + " y " + (plantaCuatro.controlLumens()))
    macetaCinco.innerText = (plantaCinco.controlHumedad() + " y " + (plantaCinco.controlLumens()))
    macetaSeis.innerText = (plantaSeis.controlHumedad() + " y " + (plantaSeis.controlLumens()))
    macetaSiete.innerText = (plantaSiete.controlHumedad() + " y " + (plantaSiete.controlLumens()))
    macetaOcho.innerText = (plantaOcho.controlHumedad() + " y " + (plantaOcho.controlLumens()))
    macetaNueve.innerText = (plantaNueve.controlHumedad() + " y " + (plantaNueve.controlLumens()))
    macetaDiez.innerText = (plantaDiez.controlHumedad() + " y " + (plantaDiez.controlLumens()))
    */

    //Interacción del usuario

    let mostrarPlanta = document.getElementById(`mostrarPlanta`)

    document.getElementById("mostrarPlantaUno").addEventListener("click", function () {
      mostrarPlanta.innerText = ("La humedad de la maceta es " + humedadMaceta + "% y su planta necesita " + plantaUno.humedad + "%")

    })
    document.getElementById("mostrarPlantaDos").addEventListener("click", function () {
      mostrarPlanta.innerText = ("La humedad de la maceta es " + humedadMaceta + "% y su planta necesita " + plantaDos.humedad + "%")

    })
    document.getElementById("mostrarPlantaTres").addEventListener("click", function () {
      mostrarPlanta.innerText = ("La humedad de la maceta es " + humedadMaceta + "% y su planta necesita " + plantaTres.humedad + "%")
    })

  }, 1000)



//Ingreso de datos al simulador (Deshabilitado hasta poder agregar asincronía)

document.getElementById("ingresarPlanta").addEventListener("click", function () {
  let nombrePlantaNueva = document.getElementById("inputNombre").value
  let humedadPlantaNueva = parseInt(document.getElementById("inputHumedad").value)
  let lumensPlantaNueva = parseInt(document.getElementById("inputLumens").value)
  let ingresoPlanta = new Planta(nombrePlantaNueva, humedadPlantaNueva, lumensPlantaNueva)
  document.getElementById("inputNombre").value = ""
  document.getElementById("inputHumedad").value = ""
  document.getElementById("inputLumens").value = ""
  plantas.push(ingresoPlanta)
})

//Array de objetos (Útil para cuando pueda utilizar el form de ingreso)
plantas = []