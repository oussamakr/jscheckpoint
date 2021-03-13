var valuecounter

var fixeprice = document.querySelector("#fixeprice").innerText;

function pricetot (){

var Tot = valuecounter * fixeprice 

document.getElementById("result").innerText = Tot


}


document.querySelector("#plus").addEventListener("click" , function(){


valuecounter = document.querySelector("#quantite").value

valuecounter++;


document.querySelector("#quantite").value = valuecounter


if ( valuecounter > 1 ) {

    document.querySelector("#moins").removeAttribute("disabled","disabled")

}

pricetot ()


})

document.querySelector("#moins").addEventListener("click" , function(){


    valuecounter = document.querySelector("#quantite").value
    
    valuecounter--;
    
    
    document.querySelector("#quantite").value = valuecounter

if (valuecounter == 1){ 
    
    
    document.querySelector("#moins").setAttribute("disabled","disabled")

    

}

pricetot ()


})



