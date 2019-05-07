const exercicio_1 = `
import React, { Component } from 'react'

export default class response1 extends Component {

  getUser(data){ // Aqui deve ter async pois se trata de um retorno com Promise (uma chamada a api) 
  //Solução: async getUser(data)
    //Implementaçaão do axios
   }

  render() {
    const data = [];
    const canLogin = this.getUser(data); // Aqui deve haver um await pois se trata de uma chamada de funcao asyncrona.
    //Solução: const canLogin = await this.getUser(data);
    return (
      <div>
      </div>
    )
  }
}
`;

const exercicio_2 = `
            import React, { useState } from "react";
            import { Button } from "antd";
            
            export default function Response2() {
              const [data, setData] = useState([
                { user: "Carlos" },
                { user: "Luiz" },
                { user: "Roberto" },
                { user: "Mateus" },
                { user: "Joao" }
              ]);
            
              function randomList() {
                setData([...data.sort(function(){return 0.5 - Math.random()})])
              }
            
              return (
                <div>
                  <Button onClick={() => randomList()}>Random</Button>
                  <h1>Lista</h1>
                  {data.map((e, i) => (
                    <p key={i}>{e.user}</p>
                  ))}
                </div>
              );
            }
            
            `;

const exercicio_3 = `
            import React, { useState } from "react";
            import { Button, Input } from "antd";
            
            export default function Response2() {
              const [user, setUser] = useState("");
              const [data, setData] = useState([{ user: "Carlos" }]);
            
              function handleChangeUser(e) {
                setUser(e.target.value);
              }
            
              function add() {
                setData([...data, { user }]);
              }
            
              return (
                <div>
                  <Input onChange={handleChangeUser} />
                  <Button onClick={() => add()}>Add</Button>
                  <h1>Lista</h1>
                  {data.map((e, i) => (
                    <p key={i}>{e.user}</p>
                  ))}
                </div>
              );
            }
            `;

const exercicio_4 = `
            import React from "react";
import { Avatar } from "antd";

export default function Exercise04() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Avatar style={{flex: 1}}  size={200} icon="user" />
      <Avatar style={{flex: 1}} size={200} icon="user" />
      <Avatar style={{flex: 1}} size={200} icon="user" />
    </div>
  );
}
`;

const exercicio_5 = `
import React from "react";

export default function response5() {
  return (
    <div
      style={{ background: "#0F4C5C", display: "flex", flexDirection: "row" }}
    >
      <div>
        <h1>Article 1</h1>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado.{" "}
      </div>
      <div>
        <h1>Article 2</h1>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado.{" "}
      </div>
      <div style={{ color: 'white', background: 'red' }}>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado.{" "}
      </div>
    </div>
  );
}
`;

const exercicio_6 = `
/*

Primeiro, commitar todo o meu código.
git add . 
git commit -m "mensagem referente ao commit"
git push
Depois, entrar no branch da equipe, dar um git pull para buscar todas as atualizacoes.
Depois disso, entraria na minha branch e usaria o comando git merge (nome branch) --no-ff para mergiar as alteracoes e mostrar se tem conflito
Se ouver conflitos, vai ser mostrado no terminal.
Depois de todos os conflitos resolvidos, usar o comando git add . para adicionar todas as alteracoes depois commitar
git commit -m "merge"
git push

Codigo mergiado.
*/
`;

const exercicio_7 = `
/*
    Promise é um metodo bastante utilizado para fazer requisicoes a APIs.
    Essa promise, a grosso modo é denominada: Promessa.

    Uma função que contem uma promise deve ter a assinatura async, onde fala pro usuario que, ao chamar essa função, 
    ela deverá esperar até que aconteça alguma coisa.
    E ai que entramos na Resolve e na Reject

    Quando uma busca da API volta com muitos dados, tende-se a demorar muito para que os dados sejam disponibilizados.
    Uma promise é exatamente uma função asyncrona que trava a aplicação até a sua requisição voltar com os dados.
    Se for tudo certo, ela retorna um resolve passando um resultado como parametro, caso der erro, ela retorna um reject.

    A Resolve é tratada em uma função com o .then((resposta)=> [...])
    A reject devolve o erro e é tratada com o .catch(erro)=> [...]
*/
`;

const exercicio_8 = `
/*
    Utilizaria o proprio devtools do google chrome.
    Definiria uma resolução e testaria a responsividade do site
*/
`;

const exercicio_9 = `
/*
    O NPM ou o Yarn é um sistema que ajuda tanto na parte de gerenciamento de dependencias para serem instalados quanto
    para criar novos comandos para funcionalidades já existentes em algum componente/funcionalidade

    yarn = baixa todas as dependencias contidas em um package.json
    yarn start = inicializa o projeto react/outros
    yarn test
    yarn (palavra chave) = dentro do arquivo package.json existe uma parte chamada scripts que você pode customizar para 
        fazer o que você quiser. Seja buildar o projeto pra teste a buildar o projeto para produção.

    npm install = baixa todas as dependencias ...  
*/
`;

const exercicio_10 = `
/*
200 - Sucesso
400 - Bad request (Request feito no formato errado)
401 - Request não autorizado
404 - Requisição não encontrada
429 - Loop na hora de fazer a requisição (Muitas vezes)
500 - Algum erro interno na API.
*/
`;

export {
  exercicio_1,
  exercicio_2,
  exercicio_3,
  exercicio_4,
  exercicio_5,
  exercicio_6,
  exercicio_7,
  exercicio_8,
  exercicio_9,
  exercicio_10
};
