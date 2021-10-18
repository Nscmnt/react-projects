# Fundamentos React

<p align='center'> Aprendendo os fundamentos do desenvimento em React e seu ecossistema. </p>
<hr>

### O que é React | <a href="https://pt-br.reactjs.org/"> Documentação </a>

<ul>
  <li>Uma biblioteca para criação de interfaces;</li>
  <li>Utilizada para construir SPA (Single Page Application);</li>
  <li>Baseada em Componentes;</li>
  <li>Utiliza o JSX para renderizar HTML;</li>
  <li>E aplica o virtual DOM para aplicar as alterações na DOM;</li>
  <li>Podemos aplicar em um projeto ou criar um projeto com ele;</li>
</ul>

### Create React App | <a href="https://create-react-app.dev/"> Documentação</a>

<p>A forma mas comum de utilizar o React é através da ferramenta create-react-app, que trás nuitas configurações pronta tais como:</p>
<ul>
<li> <a href="https://webpack.js.org/">Webpack </a> - gera o bundle final do app, além de possuir um live server para desenvolcimento.</li>
<li> <a href="https://babeljs.io/">Babel </a> - realiza o transpiler do JSX para código JS que o browser entende.</li>
<li> <a href="https://eslint.org/">ESLint </a> - possui regras para organização e padronização do código.</li>
<li> Além claro de toda lib react, uma estrutura de pastas e alguns arquivos default de exemplo para iniciar o desenvolvimento, scripts pre configurados para realização de build, tests, e start para testar o app em hot reload que é executado por padrão em localhost:3000 </li>
</ul>
<p> É necessário ter o <a href="https://nodejs.org/en/"> NodeJs </a> e <a href="https://www.npmjs.com/"> NPM </a> instalados para utilização da ferramenta.

```
$ para executar utilize o comando no terminal

npx create-react-app <nome-do-app>
```

<hr>

### JSX

<ul> 
<li> O JSX é como um HTML, porém dentro do código JS;</li>
<li> É a principal maneira de escrever HTML em React;</li>
<li> Podemos interpolar variáveis, funções de array, expressões JS dentro do JSX utilizando { }</li>
<li> Inserir valores em atributos de tags também é válido em JSX</li>
</ul>

<hr>

### Componentes

<ul> 
<li> Permite dividir a aplicação em partes reutilizaveis; </li>
<li>Os componentes renderizam JSX, assim como App.js ( que é um componente )</li>
<li> Precisamos criar um arquivo de componente;</li>
<li> E importa-lo onde precisamos utilizar </li>
<li> Normalmente fica em uma pasta chamada components</li>

<hr>

### Props

<ul> 
<li> As Props são valores passado para componentes; </li>
<li>Podemos deixa-los dinâmicos;</li>
<li> Ou seja, mudando a execução por causa do valor da prop;</li>
<li> O valor é passado como um atributo na chamada do componente; </li>
<li> E precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente.</li>
<li>As props são somente leitura!</li>
<li> É possivel definir um tipo para Props, realizando uma espécie de validação;</li>
<li> Definimos em um objeto chamado propTypes no próprio componente;</li>
<li> E ainda há possibilidade de definir um valor padrão;</li>
<li> Neste caso é utilizado o deafaultProps;</li>

<hr>

### States - Hooks

<p> Hooks são funções para gerenciar o estado da aplicação e o ciclo de vida dos componentes, os principais hooks são:</p>

#### useState

<ul> 
<li> Com ele conseguimos manusear o estado de um componente de forma simples.</li>
<li> Esse hook funciona muito bem com eventos.</li>
<li> Podemos atrelar um evento a mudança de state.</li>
</ul>

#### useEffect

<ul> 
<li>Utilizado no ciclo do vida dos componentes, mount, update e unmount.</li>
<li>Recebe um função de callback e um array de depência como parâmentros;</li>
<li>Caso o array seja vazio executa apenas no mount do componente;</li>
<li> Atualiza conforme seu array de dependencia que no geral é um estado;</li>
<li> Pode retornar um função que é executado no unmount do componente;</li>
</ul>

#### useRef

<ul>
<li>Retorna um objeto com a prorpiedade current;</li>
<li>Geralmente utilizado para se referir a um elemento do DOM sem utilizar o querySelector;</li>
<li>Quando se utiliza na DOM o atributo ref do elemento recebe o objeto retornado do useRef;</li>
<li>Seu valor não é afetado quando o componente é renderizado novamente, mantendo a referência.</li>
</ul>

#### useMemo

<ul>
<li>Retorna um valor evitando a criação do mesmo nas atualização do componente;</li>
<li>Recebe um callback e um array de depedências;</li>
<li>Utilizando em situações que o processamento é moroso para o JavaScript e não precisa ser refeito nas atualização do componente.</li>
</ul>

#### useCallback

<ul>
<li>Permite definimos um callback e um array de dependêcia do callback;</li>
<li>O callback só sera recriado se a lista de dependencia for modificada.</li>
</ul>

#### useContext

<ul>
<li>Prover uma forma de compartilhar estado de forma global;</li>
<li>Possui os métodos createContext, Provider e Consumer para criar e compartilhar estados, funções em escopos especificos;</li>
<li>Melhora a organização do código e reutilização de dados em comum como dados de user;</li>
</ul>

### React Router

<p>Apesar de não nativo do react é o pacote quase padrão utilizado para gerenciar rotas em React</p>

<ul>
<li>O React Router é um pacote para mundança de URLs da aplicação;</li>
<li>Podemos assim acessar outras views, sem page reload;</li>
<li>Trocamos apenas uma parte do layout da aplicação, ou seja, o que muda de view para view ;</li>
<li>Precisamos instalar esse pacote no projeto;</li>
<li>E também realizar algumas mudanças em como o App é estruturado;</li>
</ul>
