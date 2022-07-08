var Minuto = document.querySelector('#Minuto');
var spanMinuto = document.querySelector('#m');

function Minute(){
  let Data = new Date();
  let m = Data.getMinutes()
  
  Minuto.style.transform = `translate(-50%,-50%) rotate(${m * 6}deg)`;
  
  if(m < 10){
    m = `0${m}`;
    spanMinuto.innerHTML = m;
  }else{
    spanMinuto.innerHTML = m;
  }
  
  setTimeout(Minute,1000);
}

setTimeout(Minute,1);
