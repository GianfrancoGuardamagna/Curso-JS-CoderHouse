const humedad = function() {
    const btnCalcular = document.getElementById("btn-calcular");
    const inputNombre = document.getElementById("input-nombre");
  
    btnCalcular.addEventListener("click", function() {
      const humedadNecesaria = document.getElementById("input-humedad");
      let humedadNecesariaValor = parseFloat(humedadNecesaria.value);
      let nombreMaceta = inputNombre.value;
  
      for (let i = 0; i < 10; i += 1) {
        let porcentajeHumedad = Math.ceil(Math.random() * 100);
        console.log(porcentajeHumedad + "%");
        
        if (porcentajeHumedad <= (humedadNecesariaValor - (0.5 * humedadNecesariaValor))) {
          console.log("!CUIDADO¡ La humedad de " + nombreMaceta + " es de " + porcentajeHumedad + "% regar con " + (humedadNecesariaValor - porcentajeHumedad) + "% del volumen de tu maceta");
        }
        
        if (porcentajeHumedad >= humedadNecesariaValor) {
          console.log("!CUIDADO¡ " + nombreMaceta + " está excedido/a en un " + (porcentajeHumedad - humedadNecesariaValor) + "% de humedad");
        }
        
        if (porcentajeHumedad > (humedadNecesariaValor * 0.5) && porcentajeHumedad < humedadNecesariaValor) {
          console.log("La humedad de " + nombreMaceta +" está bien");
        }
      }
    });
  };
  
  humedad();
