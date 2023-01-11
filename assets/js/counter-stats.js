  /* 

  ***funciones***

  */

// function integers
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // function decimal
function animateDecimals(obj, start, end, duration, decimals) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const decimalValue = progress * (end - start) + start;
      obj.innerHTML = decimalValue.toFixed(decimals);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  /* 

  ***end funciones***

  */
  
  /* 

  ***implementation***

  */

  //stats generales

  //alumnos impactados
  const alumnosImpactados = document.getElementById("alumnosImpactados");
  animateValue(alumnosImpactados, 0,1626 , 2000);

  //asesores capacitados
  const asesoresCapacitados = document.getElementById("asesoresCapacitados");
  animateValue(asesoresCapacitados, 0,118 , 2000);

  //rating promedio
  const ratingPromedio = document.getElementById("ratingPromedio");
  animateDecimals(ratingPromedio, 0,9.6 , 2000,1);

  //grid por sección

    //impactados Success
    const impactadosSuccess = document.getElementById("impactadosSuccess");
    animateValue(impactadosSuccess, 0,561 , 2000);

    //impactados Meeting
    const impactadosMeeting = document.getElementById("impactadosMeeting");
    animateValue(impactadosMeeting, 0,149 , 2000);

    //impactados Advisory
    const impactadosAdvisory = document.getElementById("impactadosAdvisory");
    animateValue(impactadosAdvisory, 0,916 , 2000);

    //impactados Reload
    const impactadosReload = document.getElementById("impactadosReload");
    animateValue(impactadosReload, 0,2465 , 2000);

    //rating Success
    const ratingSuccess = document.getElementById("ratingSuccess");
    animateDecimals(ratingSuccess, 0,9.3 , 2000,1);

    //rating Meeting
    const ratingMeeting = document.getElementById("ratingMeeting");
    animateDecimals(ratingMeeting, 0,9.1 , 2000,1);

    //rating Reload
    const ratingReload = document.getElementById("ratingReload");
    animateDecimals(ratingReload, 0,9 , 2000,1);

    

  /* 

  *** end implementation***

  */