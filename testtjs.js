
var button = document.getElementById("plus");
var button = document.getElementById("moins");
var input = document.getElementById("input");
var pricefixe = document.getElementById("pricefixe");
var tot = document.getElementById("tot");

plus.addEventListener("click" ,  function(){

    input.value = parseInt(input.value) + 1 ;
});

moins.addEventListener("click" ,  function(){
    input.value = parseInt(input.value) -  1 ;

});

tot = input.value  * pricefixe ; 






