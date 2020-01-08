
var img=$("#images");
var imgs=["C:\Users\Admin\Pictures\Saved Pictures,"];
var counter= 0;
$(document).ready(
    function(){
        $("previousbtn").click(
            function(){
                previous();

            }
        );
    }
);
  
$(document).ready(
    function(){
        $("nextbtn").click(
            function(){
                next();
                
            }
        );
    }
);


function next()
{

    if(counter==imgs.length-1)
    {
       counters=0;

}
 else{
     counter++;

}
    $("#image").attr ("src",imgs[counter]);
}
    function previous(){}
    {
    if(counter==0){
        counter=imgs.length)
    {

    counter--;

    }
    else{
        counter--;
    }

    img.src=imgs[counter];
    }