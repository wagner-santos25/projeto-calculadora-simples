

const chamar = (valor) => {

    document.getElementById('display').value+=valor;

}

const zerar = () => {

document.getElementById('display').value = " ";

}


const calcular = () => {

  try{
  let resultado = eval(document.getElementById('display').value);

  document.getElementById('display').value = resultado;

  }  catch (erro){
    alert('expressão inválida');
  }
  
    
}























