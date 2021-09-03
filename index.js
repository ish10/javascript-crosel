const slider_content = document.querySelector('#box');
const nextbutton=  document.querySelector(".nxtbtn");
const previousbutton = document.querySelector(".prevbtn");
const selectedradio = Array.from(document.querySelectorAll("input"));

const imagearray =Array.from(document.querySelectorAll("#box img")); 
const playpausebutton = document.querySelector("#play_pause");

playpausebutton.innerHTML;
let flag = true;

    let i =0;


    
nextbutton.addEventListener('click',()=>{
    
    if (i<imagearray.length-1) {
        i= i+1;
    }else{
        i = 0;
    }
      slider_content.innerHTML = "<img src="+imagearray[i].src+">";
      selectedradio[i].checked=true;
});
   
previousbutton.addEventListener('click',()=>
{if ( i>0) {
    
    i= i-1;
}else{
    i = imagearray.length-1;
}
  slider_content.innerHTML = "<img src="+imagearray[i].src+">";
  selectedradio[i].checked=true;
})
    
  
  var myvar2;
playpausebutton.addEventListener('click',()=>{
    
   
    if(playpausebutton.innerHTML==="play" & flag=== true){
       flag = false;
       playpausebutton.innerHTML="pause";
       clearInterval(myvar);
       myvar2 = setInterval(()=>{
        if (i<imagearray.length-1) {
            i= i+1;
        }else{
            i = 0;
        }
          slider_content.innerHTML = "<img src="+imagearray[i].src+">";
          selectedradio[i].checked=true;
    } , 4000);;

    }

    else if(playpausebutton.innerHTML==="pause"){
        flag = true;
        playpausebutton.innerHTML="play";
      
        clearInterval(myvar2);
        clearInterval(myvar);
       
       
    }
})
const myvar = setInterval(()=>{
    if (i<imagearray.length-1) {
        i= i+1;
    }else{
        i = 0;
    }
      slider_content.innerHTML = "<img src="+imagearray[i].src+">";
      selectedradio[i].checked=true;
} , 4000);
