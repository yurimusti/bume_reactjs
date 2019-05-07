import React, { Component } from "react";
import Simple from './response/Simple';
import Custom from './response/Custom';
import { exercicio_1, exercicio_2, exercicio_3, exercicio_4, exercicio_5, exercicio_6, exercicio_7, exercicio_8, exercicio_9, exercicio_10} from './const';

import Exercise02 from "./response/Exercise02";
import Exercise03 from "./response/Exercise03";
import Exercise04 from "./response/Exercise04";
import Exercise05 from "./response/Exercise05";

export default class App extends Component {
  render() {
    return (
      <div>
        <Simple title="Exercício 1" content={exercicio_1} />
        <Custom title="Exercício 2" content={exercicio_2} component={<Exercise02 />} />
        <Custom title="Exercício 3" content={exercicio_3} component={<Exercise03 />} />
        <Custom title="Exercício 4" content={exercicio_4} component={<Exercise04 />} />
        <Custom title="Exercício 5" content={exercicio_5} component={<Exercise05 />} />
        <Simple title="Exercício 6" content={exercicio_6} />
        <Simple title="Exercício 7" content={exercicio_7} />
        <Simple title="Exercício 8" content={exercicio_8} />
        <Simple title="Exercício 9" content={exercicio_9} />
        <Simple title="Exercício 10" content={exercicio_10} />
      </div>
    );
  }
}


// <h1>Exercice 05</h1>
// <Response5 />
// <hr />
// <h1>Exercice 06</h1>
// <Highlight language="javascript">
//   {`
//     /*
//     Primeiro, commitar todo o meu código.
//     git add . 
//     git commit -m "mensagem referente ao commit"
//     git push
//     Depois, entrar no branch da equipe, dar um git pull para buscar todas as atualizacoes.
//     Depois disso, entraria na minha branch e usaria o comando git merge (nome branch) --no-ff para mergiar as alteracoes e mostrar se tem conflito
//     Se ouver conflitos, vai ser mostrado no terminal.
//     Depois de todos os conflitos resolvidos, usar o comando git add . para adicionar todas as alteracoes depois commitar
//     git commit -m "merge"
//     git push

//     Codigo mergiado.
//     */
//    `}
//    </Highlight>
//    <hr />
//    <h1>Exercice 07</h1>
//    <Highlight language="javascript">
//      {`
//      /*
//          Promise é um metodo bastante utilizado para fazer requisicoes a APIs.
//          Essa promise, a grosso modo é denominada: Promessa.

//          Uma função que contem uma promise deve ter a assinatura async, onde fala pro usuario que, ao chamar essa função, 
//          ela deverá esperar até que aconteça alguma coisa.
//          E ai que entramos na Resolve e na Reject

//          Quando uma busca da API volta com muitos dados, tende-se a demorar muito para que os dados sejam disponibilizados.
//          Uma promise é exatamente uma função asyncrona que trava a aplicação até a sua requisição voltar com os dados.
//          Se for tudo certo, ela retorna um resolve passando um resultado como parametro, caso der erro, ela retorna um reject.

//          A Resolve é tratada em uma função com o .then((resposta)=> [...])
//          A reject devolve o erro e é tratada com o .catch(erro)=> [...]
//      */
//      `}
//    </Highlight>
//    <hr />
//    <h1>Exercicio 8</h1>
//    <Highlight language="javascript">
//      {`
//      /*
//      Utilizaria o proprio devtools do google chrome.
//      Definiria uma resolução e testaria a responsividade do site
//      */
//      `}
//    </Highlight>
//    <hr />
//    <h1>Exercicio 9</h1>
//    <Highlight language="javascript">
//      {`
//      /*
//      O NPM ou o Yarn é um sistema que ajuda tanto na parte de gerenciamento de dependencias para serem instalados quanto
//      para criar novos comandos para funcionalidades já existentes em algum componente/funcionalidade
 
//      yarn = baixa todas as dependencias contidas em um package.json
//      yarn start = inicializa o projeto react/outros
//      yarn test
//      yarn (palavra chave) = dentro do arquivo package.json existe uma parte chamada scripts que você pode customizar para 
//          fazer o que você quiser. Seja buildar o projeto pra teste a buildar o projeto para produção.
 
//      npm install = baixa todas as dependencias ...  
//      */
//    `}
//    </Highlight>
//    <hr />
//    <h1>Exercicio 10</h1>
//    <Highlight language="">
//      {`
//        /*
//        200 - Sucesso
//        400 - Bad request (Request feito no formato errado)
//        401 - Request não autorizado
//        404 - Requisição não encontrada
//        429 - Loop na hora de fazer a requisição (Muitas vezes)
//        500 - Algum erro interno na API.
//        */
//      `}
//    </Highlight> */}





