//Control del espacio de las plantas

import plantas from './ingresoPlantaExt.js'

let imagenPlantaUno = document.getElementById(`imagenPlantaUno`)
let humedadPlantaUno = document.getElementById(`humedadPlantaUno`)
let lumensPlantaUno = document.getElementById(`lumensPlantaUno`)
let estadoPlantaUno = document.getElementById(`estadoPlantaUno`)
let imagenPlantaDos = document.getElementById(`imagenPlantaDos`)
let humedadPlantaDos = document.getElementById(`humedadPlantaDos`)
let lumensPlantaDos = document.getElementById(`lumensPlantaDos`)
let estadoPlantaDos = document.getElementById(`estadoPlantaDos`)
let imagenPlantaTres = document.getElementById(`imagenPlantaTres`)
let humedadPlantaTres = document.getElementById(`humedadPlantaTres`)
let lumensPlantaTres = document.getElementById(`lumensPlantaTres`)
let estadoPlantaTres = document.getElementById(`estadoPlantaTres`)
let espacioPlantas = document.getElementById(`espacioPlantas`)

setInterval(() => {

  if (Array.isArray(plantas) && plantas.length >= 1) {
    imagenPlantaUno.style.display = "initial"
    espacioPlantas.style.display = "grid"
   }
  else {
      imagenPlantaUno.style.display = "none"
      espacioPlantas.style.display = "none"
    }

    if (Array.isArray(plantas) && plantas.length >= 2) {
      imagenPlantaDos.style.display = "initial"
    } else {
      imagenPlantaDos.style.display = "none"
    }

    if (Array.isArray(plantas) && plantas.length >= 3) {
      imagenPlantaTres.style.display = "initial"
    } else {
      imagenPlantaTres.style.display = "none"
    }

    if (Array.isArray(plantas) && plantas.length >= 1) {
      humedadPlantaUno.innerText = (plantas[0].humedad)
      lumensPlantaUno.innerText = (plantas[0].lumens)
      estadoPlantaUno.innerText = (plantas[0].nombre)
    } else {
      humedadPlantaUno.innerText = ""
      lumensPlantaUno.innerText = ""
      estadoPlantaUno.innerText = ""
    }

    if (Array.isArray(plantas) && plantas.length >= 2) {
      humedadPlantaDos.innerText = (plantas[1].humedad)
      lumensPlantaDos.innerText = (plantas[1].lumens)
      estadoPlantaDos.innerText = (plantas[1].nombre)
    } else {
      humedadPlantaDos.innerText = ""
      lumensPlantaDos.innerText = ""
      estadoPlantaDos.innerText = ""
    }

    if (Array.isArray(plantas) && plantas.length >= 3) {
      humedadPlantaTres.innerText = (plantas[2].humedad)
      lumensPlantaTres.innerText = (plantas[2].lumens)
      estadoPlantaTres.innerText = (plantas[2].nombre)
    } else {
      humedadPlantaTres.innerText = ""
      lumensPlantaTres.innerText = ""
      estadoPlantaTres.innerText = ""
    }


  }, 0)