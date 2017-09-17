const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const pretvornaTabela = [];
pretvornaTabela[54] = 38;
pretvornaTabela[53] = 37;
pretvornaTabela[56] = 40;

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e){
   console.log('Sem v onKeyDownHandlerju');
   const key = parseInt(e.detail || e.which);


  //  if (key === code[index]) {
  //    index++;
  //  if (index === code.length) {
  //    alert("Hurray!");
  //    index = 0;
  //   }
  //  }
  }
  function convert(key){
    for (var k in pretvornaTabela) {
      if (key === k) {
        key = pretvornaTabela[k];
      }
    }
    return key;
  }
}
