  var numero="";
  var numero2="";
  var numero=[];

function obtenerNumero(num){
    numero += num;
    console.log(numero);
    document.getElementById("display").value = numero;
    return numero;
  }

  var guardar = function(){
    
    clear();
    numeros2 = obtenerNumero();

    return nuevo;
  }

var resultado = function(guardar ){
  document.getElementById("display").value = total;
}

var clear = function(){
  document.getElementById("display").value = "";
}
