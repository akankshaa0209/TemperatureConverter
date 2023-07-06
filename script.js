var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
//we are targting input boxes created in html using these variables

//event listener..when we click on cel what will be done
cel.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5) + 32; //input c is taken and the value is chenged into f
    fah.value = f;  //fah is assigned calculated value f
})

//for fahrenheit to celsius conversion
fah.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) * 5/9; 
    cel.value = c;  
})