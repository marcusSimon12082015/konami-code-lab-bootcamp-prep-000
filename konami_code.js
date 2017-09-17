const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.getElementsByTagName('body');
  var rightKey = 0;
  body.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e){
   console.log('Sem v onKeyDownHandlerju');
  //  const key = parseInt(e.detail || e.which);
  //  if (key === code[index]) {
  //    index++;
  //    if (index === code.length) {
  //      alert("Hurray!");
  //      index = 0;
  //    }
  //  }
  // }
}
