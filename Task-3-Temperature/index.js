
var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var btn = document.getElementById("btn");


cel.addEventListener('input',function(){
    let c = cel.value;
    let f = (c * 9/5) + 32;
    fah.value = f.toFixed(2);
});

fah.addEventListener('input',function(){
    let f = fah.value;
    let c = (f - 32)*5/9;
    cel.value = c.toFixed(2);
    
});

btn.addEventListener("click",function(){
    fah.value="";
    cel.value="";
});