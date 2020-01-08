function add(){
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var sum= add(a,b);
    var res= document.getElementById("sumpos")
    res.innerHTML+=sum;
    res.style.backgroundColor="blue";
}
      
function add(x,y){
    return x+y;

}


