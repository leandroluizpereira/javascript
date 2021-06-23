


 
function botao(){
   
    var n = document.getElementById("text").value;
    var altura = document.getElementById("altura").value;
    

    var imc = n / (altura * altura);

     if (imc >=19 && imc <=25){

        document.getElementById("p").innerHTML="peso normal "+imc.toFixed(2);

    }
    else if(imc <=18 ){
        document.getElementById("p").innerHTML="abaixo do peso "+imc.toFixed(2);
    }

    else if(imc >=27 && imc <=42){
    document.getElementById("p").innerHTML="obesidade moderada "+imc.toFixed(2);
 
}
    else if(imc >=43  ){
    document.getElementById("p").innerHTML="obesidade morbita "+imc.toFixed(2);


 
}
else{
document.getElementById("p").innerHTML=imc.toFixed(2);

}

}
//peso/ (altura x altura)