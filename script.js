let numGuess;
let num;
let sub;
let heading;
let output="";
let text="";
function ran(){
    numGuess=Math.floor(Math.random()*100);
}
function check(event){
    event.preventDefault();
    num=parseInt(document.getElementById("num").value);
    text=document.getElementById("text");
    heading=document.getElementById("guess");
    if (isNaN(num)) {
        heading.textContent = "Please enter a valid number!";
        return;
    }
    if(numGuess>num){
        output="you guessed lower than the actual number";
    }else if(numGuess<num){
        output="you guessed higher than the actual number";
    }else{
        output="you guessed correctly!";
    }
     text.textContent=output;
    heading.textContent="your guess "+num;
}
window.addEventListener("load",ran);
sub=document.getElementById("sub");
sub.addEventListener("click",check);

