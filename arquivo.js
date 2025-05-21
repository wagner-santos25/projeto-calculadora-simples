
// parte 1 //
const chamar = (valor) => {

    document.getElementById('display').value+=valor;

}

//parte 2 //

const zerar = () => {

document.getElementById('display').value = " ";

}

//parte 3 //
const calcular = () => {

  try{
  let resultado = eval(document.getElementById('display').value);

  document.getElementById('display').value = resultado;

  }  catch (erro){
    alert('expressão inválida');
  }
  
    
}























