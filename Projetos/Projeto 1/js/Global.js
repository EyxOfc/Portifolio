var Global = {
  Usuario: 'Usuario',
  Maca: {
    x: 0,
    y: 0
  },
  Snake: {
    x: 0,
    y: 0
  },
  Funcoes: {
    AdicionarBotoes: '',
    RemoverBotoes: '',
    GerarPosicaoX: '',
    GerarPosicaoY: '',
    VerificarMaca: '',
    Cronometro: '',
    Game: '',
    GameOff: '',
    Pontos: ''
  },
  Game: {
    Segundos: 10,
    Pontos: 0
  }
}

if(Cookies.get('Usuario.Nome') != undefined){
  Global.Usuario = Cookies.get('Usuario.Nome');
}

export default Global;
