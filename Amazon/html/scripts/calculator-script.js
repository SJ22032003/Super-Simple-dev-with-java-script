let calculation = '';

    function updateCalculation(cal) {

      calculation += cal;
      console.log(calculation)
      displayCalculation();
    }
    function displayCalculation() {
      const ret = document.querySelector('.display-on-page').innerHTML = calculation;
      console.log(ret)
    }