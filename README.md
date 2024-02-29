# ✨🏃🏽‍♀️ HTTP Playground 🏃🏽‍♀️✨
## Finalmente vai poder mandar uns GET, POST, PUT e DELETE por aí, hein garota? 😅

Isso aqui é uma parada bem boba, não é o ideal, o ideal seria conseguir botar aquela API de lista de tarefas pra rodar, só pra gente ter alguns status codes diferentinhos, maaaaaaasss
O json-server vai ajudar já a entender algumas coisitas:

- Uma mesma rota/caminho pode receber requisições com mais de um verbo e apresentar comportamentos diferentes para cada um deles, ou seja, no fundo são endpoints distintos expondo diferentes operações.
- Como a interação entre Front e Back afeta as informações presentes no banco de dados.
- Como um banco """NoSQL""" baseado em documentos tá cagando e andando pra forma dos dados armazenados.
- Posso tentar explicar que veerbos HTTP apesar de darem um norte, não definem o que o endpoint vai fazer, apenas servem como um direcionador para o Back identificar o que aquela request naquele endereço quer fazer.
- E muito mais!!!

### Mas que porra é JSON-SERVER garoto? 🤔

Então, sei que tu não perguntou isso, mas o json-server é um pacote, uma aplicação de terceiros, uma dependência disponível para projetos Node via npm.
npm é o gerenciador de pacotes e dependências do Node, sendo curto e grosso, o Maven do bem.

### Por que esse json-server é necessário pra gente agora? 🙄

Porque eu não tava com saco de fazer uma API com várias rotas legais pra gente brincar por 15min, por isso...

Nosso querido aí basicamente implementa rotas comuns para recuperar informações, alterá-las, removê-las e acrescentar novas entradas a um banco de dados de mentirinha, isso porque ele usa um arquivo JSON como banco, ou seja, por baixo dos panos temos um objeto Javascript armazenando essas informações, cada rota, como por exemplo `/plr`, é na verdade como se fose um atributo desse objeto, carregando um array de objetos que são as nossas informações.

### De novo, não é o ideal

mas espero que tu aproveite o que der e consiga continuar melhorando usando esse singelo repositório aqui...

###### feito com carinho e na pilha do pós-cardio por <a href="https://github.com/b4yerl" target="_blank">mim</a> :)
