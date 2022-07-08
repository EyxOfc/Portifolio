import Global from '../Global.js';



function AddPonto(){
  Global.User.PontosAtual += 1;
  document.querySelector('#p').innerHTML = Global.User.PontosAtual;
  console.log(Global.User)
  if(Global.User.PontosAtual > Global.User.PontosMax){
    Cookies.set('PontosMax',Global.User.PontosAtual);
    Global.User.PontosMax = Number(Cookies.get('PontosMax'));
  }
}


export default AddPonto;
