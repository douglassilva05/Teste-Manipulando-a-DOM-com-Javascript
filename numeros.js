function myFunction(){
let x = document.getElementById("numb").value;
let text;
if(isNaN(x) || x < 1 || x > 10){
text = "Numeros não são de 1 a 10";
}else{
text = "Numeros Corretos";
}
document.getElementById("show").innerHTML = text;
}
