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
  
 function ambienteInt () {
  
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
  
    if (humedadAmbiente < 30) {
      swal("Cuidado! La humedad del ambiente es demasiada", {
        icon: "warning",
        buttons: true,
      })
    }
    if (temperaturaAmbiente > 28) {
      swal("Cuidado! La temperatura del ambiente es demasiada", {
        icon: "warning",
        buttons: true,
      })
    }
    if (vientoAmbiente >= 60) {
      swal("Cuidado! La velocidad del viento es muy elevada", {
        icon: "warning",
        buttons: true,
      })
    }

    estadoTanque.innerText = (pH + " y " + eC)
  
    //Registro de ultimas mediciones
    
    const humedadAmbienteIntJson = JSON.stringify(humedadAmbiente)
    localStorage.setItem('Humedad del Ambiente interior', humedadAmbienteIntJson)
    const temperaturaAmbienteIntJson = JSON.stringify(temperaturaAmbiente)
    localStorage.setItem('Temperatura del Ambiente interior', temperaturaAmbienteIntJson)
    const vientoAmbienteIntJson = JSON.stringify(vientoAmbiente)
    localStorage.setItem('Viento del Ambiente interior', vientoAmbienteIntJson)
  }

  ambienteInt()

  setInterval(ambienteInt(), 15000)