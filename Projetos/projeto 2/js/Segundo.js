var Segundo = document.querySelector('#Segundo');
var spanSegundo = document.querySelector('#s')

function Second(){
  let Data = new Date();
  let s = Data.getSeconds();
  
  Segundo.style.transform = `translate(-50%,-50%) rotate(${s * 6}deg)`;
  
  if(s < 10){
    s = `0${s}`;
    spanSegundo.innerHTML = s;
  }else{
    spanSegundo.innerHTML = s;
  }
  
  setTimeout(Second,1000);
}

setTimeout(Second,1);
