let ambiente = {
  humedadNecesaria : 60,
  temperaturaNecesaria : 24,
  vientoNecesario: 13,
}

let tanqueAgua = {
  phAgua : 4,
  ecAgua : 11,
}

let macetaElGaucho = {
  lumensMaceta : 43,
  humedadMaceta : 65,
}

let macetaTangie = {
  lumensMaceta : 48,
  humedadMaceta : 35,
}

let rainbows = {
  lumensMaceta : 49,
  humedadMaceta : 45,
}

setInterval(function() {

    let humedadAmbiente = Math.ceil(Math.random() * (86 - 25) + 25)
    let temperaturaAmbiente = Math.ceil(Math.random() * (40 - 13) + 13)
    let vientoAmbiente = Math.ceil(Math.random() * 100)
    let humedadMaceta = Math.ceil(Math.random() * 100)
    let lumensMaceta = Math.ceil(Math.random() * 100)
    let phAguaTanque = Math.ceil(Math.random() * (14 - 1) + 1)
    let ecAguaTanque = Math.ceil(Math.random() * (11 - 1) + 1)

console.log("El indice de humedad en el ambiente es " + humedadAmbiente)
console.log("El indice de temperatura en el ambiente es " + temperaturaAmbiente)
console.log("El indice de viento en el ambiente es " + vientoAmbiente)
console.log("El indice de humedad en la maceta es " + humedadMaceta)
console.log("El indice de lumens en la planta es" + lumensMaceta)
console.log("El indice de pH en el tanque de agua es " + phAguaTanque)
console.log("El indice de Ec en el tanque de agua es " + ecAguaTanque)


if((humedadAmbiente - ambiente.humedadNecesaria) <= 70 && (humedadAmbiente - ambiente.humedadNecesaria) >= 40){
  console.log("La humedad del ambiente está bien")  
  }if((humedadAmbiente - ambiente.humedadNecesaria) > 70 || (humedadAmbiente - ambiente.humedadNecesaria) < 40){
    console.log("Corregir la humedad del ambiente")  
  }

if((temperaturaAmbiente - ambiente.temperaturaNecesaria) <= 25 && (temperaturaAmbiente - ambiente.temperaturaNecesaria) >= 18){
  console.log("La temperatura del ambiente está bien")
}if((temperaturaAmbiente - ambiente.temperaturaNecesaria) > 25 || (temperaturaAmbiente - ambiente.temperaturaNecesaria) < 18){
  console.log("Corregir la temperatura del ambiente")
}

if((vientoAmbiente - ambiente.vientoNecesario) <= 40 && (vientoAmbiente - ambiente.vientoNecesario) >= 10){
  console.log("El viento del ambiente está bien")  
  }if((vientoAmbiente - ambiente.vientoNecesario) > 40 || (vientoAmbiente - ambiente.vientoNecesario) < 10){
    console.log("Corregir viento del ambiente")  
    }

if((phAguaTanque - tanqueAgua.phAgua) >= 6 && (phAguaTanque - tanqueAgua.phAgua) <= 7){
    console.log("El pH del agua del tanque está bien")
}if((phAguaTanque - tanqueAgua.phAgua) < 6 || (phAguaTanque - tanqueAgua.phAgua) > 7){
    console.log("Corregir el pH del agua del tanque")
}

if((ecAguaTanque - tanqueAgua.ecAgua) >= 6 && (ecAguaTanque - tanqueAgua.ecAgua) <= 7){
    console.log("la eC del agua del tanque está bien")
}if((ecAguaTanque - tanqueAgua.ecAgua) < 6 || (ecAguaTanque - tanqueAgua.ecAgua) > 7){
    console.log("Corregir la eC del agua del tanque")
}

}, 10000);