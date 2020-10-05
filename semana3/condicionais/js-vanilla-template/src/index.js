//EXERCICIO1//

// O código diz que se uma pessoa insrir uma nota que dividido por 2 o seu resto seja igual a zero a pessoa passa no teste, mas qualquer resto diferente disso a pessoa não passa no teste //

//EXERCICIO2//

// O codigo serve para mostrar os preços das frutas que o usuario escolher em uma tela //
//O valor seria 2,25 que seria o preço do kg da fruta //
//A mensagem seria valor undefined //

//EXERCICIO3//

//A - Está pedindo pro usuario inserir um valor no qual a validação é numero//
//B- Com o numero 10 o console mostrara uma mensagem indicando que o usuario passou no teste, já com -10 o console não mostrará nada //
//C- O código vai apresentar erro devido ao poscionamento das chaves //

//EXERCICIO4//
const idadeDoUsuario = Number(prompt("Digite a sua idade"))
if(numero >= 18 ) {
    console.log("Você pode dirigir")
  } else {
    console.log("Você não pode dirigir")
  }

//EXERCICIO5//
  const TurnoDeEstudo = (prompt("Digite M se você estuda de manhã, V se estuda de tarde ou N se estuda de noite"))
  prompt === String (M,V,N)
  if(TurnoDeEstudo === M ) {
      console.log("Bom dia !!")
    } if (TurnoDeEstudo === V) {
      console.log("Boa tarde !!")
    } if (TurnoDeEstudo === N ) {
        console.log("Boa noite !!")
    }
  //EXERCICIO6//

  switch (Turnos) {
    case M:
      console.log ("Bom dia !!")
      break
    case v:
        console.log("Boa tarde !!")
      break
    case N:
        console.log("Boa noite !!")
      break
    default:
      console.log ("Desculpe :(")
      break
  }

  
//EXERCICIO7//
    let filmes = (prompt("Digite o gênero de filme que quer assistir:"))
    let valor = Number (prompt("Digite o valor que deseja pagar no ingresso:"))
 if (filmes === fantasia && valor === 15 )
    console.log("Bom filme !!")
  else {
    console.log("Escolha outro filme :(")
  }
 