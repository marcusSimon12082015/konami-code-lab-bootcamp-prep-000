const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);
  var naslov = document.getElementById("naslov");
  naslov.addEventListener('click', clickHandler);
  function clickHandler(e){
    alert('Pritisk!');
  }

  function onKeyDownHandler(e){
   console.log('Sem v onKeyDownHandlerju');
   const key = parseInt(e.detail || e.which);
   alert(key);

  //  if (key === code[index]) {
  //    index++;
  //  if (index === code.length) {
  //    alert("Hurray!");
  //    index = 0;
  //   }
  //  }
  }
}
