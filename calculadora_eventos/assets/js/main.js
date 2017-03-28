//declaracion de variables globales
alert("mensaje");

var num1=0;
var num2=0;
var mostrado="";
var comprobador=0;
var operador=0;
//funcion para borrar
function nada(){

document.getElementById('ver').value=0;

}
//funcion de los operadores
function operacion(a){
switch (a){
case 1:
operador=1
document.getElementById('ver').value="+";
break;
case 2:
operador=2
document.getElementById('ver').value="-";
break;
case 3:
operador=3
document.getElementById('ver').value="*";
break;
case 4:
operador=4
document.getElementById('ver').value="div";
break;
default:
break;
}
mostrado="";
comprobador=1;

}
//funcion para que los botones se muestren en el input text
function mostrar(a){

mostrado+=a;
document.getElementById('ver').value=mostrado;

  if(comprobador==0){
    num1=parseFloat(mostrado);
  }
  else if(comprobador==1){
    num2=parseFloat(mostrado);
  }

}
//funcion que hace el resultado

function resultado(){
  switch (operador){
   case 1:
      document.getElementById('ver').value=num1+num2;
   break;
   case 2:
     document.getElementById('ver').value=num1-num2;
   break;
   case 3:
     document.getElementById('ver').value=num1*num2;
   break;
   case 4:
     document.getElementById('ver').value=num1/num2;
   break;
   default:
   break;

}
num1=numer(document.getElementById('ver').value);
mostrado="";

}


/* uttilizar parsedoble para decimales*/
