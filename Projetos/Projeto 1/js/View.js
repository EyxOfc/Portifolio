var altura = window.innerHeight;

var largura = window.innerWidth;

var body = document.querySelector('body');

var src = [
  "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js",
  './js/Jogo.js',
  './js/maca/Mover.js',
  './js/Global.js'
]

if(altura > 999 && largura > 599){
  
  for(let i = 0; i < src.length; i++){
    
    let script = document.createElement('script');
    
    script.src = src[i];
    
    script.type = 'module'
    
    body.appendChild(script);
  }
}
