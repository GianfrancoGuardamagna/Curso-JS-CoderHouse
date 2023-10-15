import { plantas } from './ingresoPlantaExt.js'
  
  //Ingreso de datos al simulador
  
  document.getElementById("ingresarPlanta").addEventListener("click", function () {
    let nombrePlantaNueva = document.getElementById("inputNombre").value.trim()
    let humedadPlantaNueva = document.getElementById("inputHumedad").value
    let lumensPlantaNueva = document.getElementById("inputLumens").value
  
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