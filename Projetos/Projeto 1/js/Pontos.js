import Global from './Global.js';

function Pontos(){
  let Nome = Global.Usuario;
  let Pontos = Global.Game.Pontos;
  document.querySelector('#pontos').innerHTML = `${Nome}: ${Pontos}`;
}


Global.Funcoes.Pontos = Pontos;
export default Pontos;
