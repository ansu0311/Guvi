function calling(n){
    if(n>0){
        console.log(n);
        document.getElementById("resultValue").innerHTML = n;
         setTimeout(()=>{
         decrease(n);},1000);
        
    }
    else{
        console.log("Happy New year");
        document.getElementById("resultValue").innerHTML = "Happy Independence Day";
    }
}
function decrease(x){
    x--;
    calling(x);
}
function called(caller){
    var p=10;
    caller(p)
}
called(calling)