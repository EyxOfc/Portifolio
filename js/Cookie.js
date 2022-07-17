import Global from './Global.js';
import Alertar from './Alert.js';
import Prompting from './Prompt.js';
import Confirmar from './Confirm.js';

var Usuario = {
  Nome: ''
}

if(Cookies.get('Usuario.Nome') != undefined){
  Usuario.Nome = Cookies.get('Usuario.Nome');
  Alertar('Aviso',`${Usuario.Nome} este site usa cookies, e seja bem vindo 😃.`,'')
}else{
  Confirmar('Usuario','Quer criar um usuário localmente?',
  ()=>{
    Prompting('Nome de usuário',Usuario,'Nome',()=>{
      Cookies.set('Usuario.Nome',Usuario.Nome);
      Alertar('Aviso',`${Usuario.Nome} este site usa cookies, e seja bem vindo 😃.`,'')
    })
  },
  ()=>{
    Alertar('Aviso',`Este site usa cookies, e seja bem vindo 😃.`,'');
  })
}


Global.Cookie = Usuario;
