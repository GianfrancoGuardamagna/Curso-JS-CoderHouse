import {
  humedadSuelo,
  uvIndice
} from './ambienteExt.js'

//Array de objetos
export const plantas = []

//Ingreso de datos al simulador

document.getElementById("ingresarPlanta").addEventListener("click", function () {
  let nombrePlantaNueva = document.getElementById("inputNombre").value.trim()
  let humedadPlantaNueva = document.getElementById("inputHumedad").value
  let lumensPlantaNueva = document.getElementById("inputLumens").value
  

  switch (humedadPlantaNueva) {
    case "baja":
      if (humedadSuelo < (1 / 100) * 7) {
        swal("Cuidado, la humedad del suelo es menor a la que tu planta puede tolerar", {
          dangerMode: true,
          buttons: true,
        })
      }
      break
    case "media":
      if (humedadSuelo < (1 / 100) * 9) {
        swal("Cuidado, la humedad del suelo es menor a la que tu planta puede tolerar", {
          dangerMode: true,
          buttons: true,
        })
      }
      break
    case "alta":
      if (humedadSuelo < (1 / 100) * 11) {
        swal("Cuidado, la humedad del suelo es menor a la que tu planta puede tolerar", {
          dangerMode: true,
          buttons: true,
        })
      }
      break
  }

  switch (lumensPlantaNueva) {
    case "baja":
      if (uvIndice < 0.4) {
        swal("Cuidado, la luz del exterior es menor a la que tu planta necesita", {
          dangerMode: true,
          buttons: true,
        })
      }
      break
    case "media":
      if (uvIndice < 0.7) {
        swal("Cuidado, la luz del exterior es menor a la que tu planta necesita", {
          dangerMode: true,
          buttons: true,
        })
      }
      break
    case "alta":
      if (uvIndice < 0.9) {
        swal("Cuidado, la luz del exterior es menor a la que tu planta necesita", {
          dangerMode: true,
          buttons: true,
        })
      }
      break
  }

  if (nombrePlantaNueva !== "" && humedadPlantaNueva !== "" && lumensPlantaNueva !== "") {
    let ingresoPlanta = new Planta(nombrePlantaNueva, humedadPlantaNueva, lumensPlantaNueva)

    plantas.push(ingresoPlanta)

    document.getElementById("inputNombre").value = ""
    document.getElementById("inputHumedad").value = ""
    document.getElementById("inputLumens").value = ""
  } else {
    Toastify({
      text: "Please, fullfill the form correctly",
      duration: 3000,
      newWindow: true,
      close: true,
      className: "tosty",
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, rgb(107, 0, 134), rgb(45, 0, 56)",
      },
      onClick: function () { }
    }).showToast();
  }
  if (plantas.length >= 3) {
    Toastify({
      text: "The room is full of plants",
      duration: 3000,
      newWindow: true,
      close: true,
      className: "tosty",
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, rgb(107, 0, 134), rgb(45, 0, 56)",
      },
      onClick: function () { }
    }).showToast();

    let stopArray = document.getElementById('ingresarPlanta')
    stopArray.id = ''
  }

});

export default plantas

class Planta {
  constructor(nombre, humedad, lumens) {
    this.nombre = nombre
    this.humedad = humedad
    this.lumens = lumens
  }
}
