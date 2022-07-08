var Global = {
  User: {
    PontosAtual: 0,
    PontosMax: 0
  },
  Snake: {
    DirX: 0,
    DirY: 0
  },
  Maca: {
    DirX: 0,
    DirY: 0
  }
}

if(Cookies.get('PontosMax') === undefined){
  Global.User.PontosMax = 0;
  Cookies.set('PontosMax',Global.User.PontosMax);
}else{
  Global.User.PontosMax = Cookies.get('PontosMax');
  document.querySelector('#max').innerHTML = '<br>o maximo seu é '+Cookies.get('PontosMax')
}

export default Global;
