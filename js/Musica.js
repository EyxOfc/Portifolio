var e = document.querySelector('#player').childNodes[1];
var d = document.querySelector('#player').childNodes[5];
var audio = document.querySelector('audio');
var capa = document.querySelector('#capa');
var start = document.querySelector('#player').childNodes[3];
var indexMusica = 0;
var Musicas = [
  'verde',
  'roses',
  'kevin',
  'lofi'
]


e.addEventListener('click',()=>{
  if(indexMusica === 0){
    indexMusica = Musicas.length - 1;
    audio.src = `./audio/${Musicas[indexMusica]}.mp3`;
    capa.style.backgroundImage = `url(./img/${Musicas[indexMusica]}.jpeg)`;
    
  }else{
    indexMusica--;
    audio.src = `./audio/${Musicas[indexMusica]}.mp3`;
    capa.style.backgroundImage = `url(./img/${Musicas[indexMusica]}.jpeg)`;
  }
  Despause()
})


d.addEventListener('click',()=>{
  if(indexMusica === Musicas.length - 1){
    indexMusica = 0;
    audio.src = `./audio/${Musicas[indexMusica]}.mp3`;
    capa.style.backgroundImage = `url(./img/${Musicas[indexMusica]}.jpeg)`
  }else{
    indexMusica++;
    audio.src = `./audio/${Musicas[indexMusica]}.mp3`;
    capa.style.backgroundImage = `url(./img/${Musicas[indexMusica]}.jpeg)`
  }
  Despause()
})


start.addEventListener('click',Despause);
function Despause(){
  start.src = './img/pause.png';
  start.addEventListener('click',Pause);
  start.removeEventListener('click',Despause)
  audio.play()
}

function Pause(){
  start.src = './img/despause.png';
  start.addEventListener('click',Despause);
  start.removeEventListener('click',Pause)
  audio.pause();
}

