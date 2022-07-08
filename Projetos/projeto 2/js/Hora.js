var Hora = document.querySelector('#Hora');
var spanHora = document.querySelector('#h')

function Hour(){
  let Data = new Date();
  let h = Data.getHours();
  
  Hora.style.transform = `translate(-50%,-50%) rotate(${h * 15}deg)`;
  
  if(h < 10){
    h = `0${h}`;
    spanHora.innerHTML = h;
  }else{
    spanHora.innerHTML = h;
  }
  
  setTimeout(Hour,1000);
}

setTimeout(Hour,1);
