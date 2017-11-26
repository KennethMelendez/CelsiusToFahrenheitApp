var userInput = document.querySelector('#userInput');
var submit = document.querySelector('#submit');
var result = document.querySelector('#result');



if (userInput && submit && result){

  submit.addEventListener('click',CelsiusConverter);

    //function converts Celsius to fahrenheit
    function CelsiusConverter(){

      var inputC = userInput.value;

      if (Number(inputC)){
      var fahrenheit = (inputC * 1.8) + 32;
      result.textContent = '°F: ' +  fahrenheit;
      console.log(fahrenheit);

    } else if (inputC == 0){
      result.textContent = '°F: ' + 32;
    } else {
        result.textContent = "Sorry, but that is not a number";
      }

    }
}
