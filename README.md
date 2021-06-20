# 📚 Anotaçôes sobre a linguagem Javascript
 
 ## Tópicos Wiki
 :star:Básico
 * [Fontes e pesquisas](https://github.com/leandroluizpereira/Javascript/wiki/0-Home---Fontes-de-estudos)
 * [Sintaxe da linguagem](https://github.com/leandroluizpereira/Javascript/wiki/1.1-Sintaxe-da-linguagem)
 * [Sobre a linguagem javascript](https://github.com/leandroluizpereira/Javascript/wiki/1----Historia)
 * [Declaraçâo de variáveis](https://github.com/leandroluizpereira/Javascript/wiki/2-Declara%C3%A7%C3%A2o-de-vari%C3%A1veis)
 * [Operadores Aritimética](https://github.com/leandroluizpereira/Javascript/wiki/3-Operadores-Aritm%C3%A9tica)
 * [Operadores Lógico](https://github.com/leandroluizpereira/Javascript/wiki/4-Operadores-L%C3%B3gicos)
 * [Interpolaçâo de variáveis](https://github.com/leandroluizpereira/Javascript/wiki/5--Interpola%C3%A7%C3%A2o-de-vari%C3%A1veis)
 * [String : manipulando caracteres ](https://github.com/leandroluizpereira/Javascript/wiki/6.1-String)
 * [Concatenaçâo de variáveis](https://github.com/leandroluizpereira/Javascript/wiki/6-Concatena%C3%A7%C3%A3o-de-vari%C3%A1veis)
 * [Estrutura de desição (if,swicth)](https://github.com/leandroluizpereira/Javascript/wiki/9.1-Estrutura-de-Desi%C3%A7%C3%A2o-(if,-switch))
 * [Estrutura de repetiçâo (for,while,do-while)](https://github.com/leandroluizpereira/Javascript/wiki/9-Estrutura-de-repeti%C3%A7%C3%A2o-(for,while,do-while))
 * [Métodos](https://github.com/leandroluizpereira/Javascript/wiki/=-10--M%C3%A9todos)
 * [Função (procedimento)](https://github.com/leandroluizpereira/Javascript/wiki/7-Fun%C3%A7%C3%A3o-bloco-de-c%C3%B3digo)
 
 
## Javascript & Html
  :star:Javascript e web Html
   * [Mudar de tela após 6 segundos](https://github.com/leandroluizpereira/Javascript/wiki/a---1-mudar-de-tela)
   * [(Unicode) Formatar caracteres e espaços ](https://github.com/leandroluizpereira/Javascript/wiki/a-2-Fomatar-caracteres-e-espa%C3%A7o-com-Unicode-e-escape)

 
 <div id="sobre">
 
 
  <div id="timeout">
 
 # Favoritos
 
 ## Timeout 
 
 ir para outra tela depois de 5 segundos <br> o segundo parâmetro do window.open() '_self' ele faz abrir na mesma tela.
 
 ```javascript
  setTimeout(function() {
    window.open('index_2.html','_self');
  }, 5000);
 ```
 <div id="scroll">
 
## Scrooll

toda vez que usar o evento scroll ele aparecerar a mensagem no console "está usando o scroll"
 ```javascript
window.addEventListener('scroll',function(){  
  console.log("está usando o scroll");
}
);
 ```
 
## Escrever no javascript

 ```javascript
   document.write("<h1> Escrevendo um texto</h1> ");
}
);
 ```
