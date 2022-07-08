import Alertar from './Alert.js';
import Prompting from './Prompt.js';

var Usuario = {
  Nome: ''
}

if(Cookies.get('Usuario.Nome') === undefined){
  Prompting(Usuario, 'Nome', () => {
    Alertar('Aviso', `Ola usuário ${Usuario.Nome}, este site usa Cookies!`);
    Cookies.set('Usuario.Nome', Usuario.Nome);
  });
}else{
  Usuario.Nome = Cookies.get('Usuario.Nome');
  Alertar('Aviso',`Ola usuário ${Usuario.Nome}, este site usa Cookies!`);
}
