console.log ("Seja bem vindo ao jogo blackjack !!")
if(confirm("pergunta de sim ou não")) {
	const iniciaUmNovojogo= true
} else {
	console.log ("O jogo acabou")
}
let cartaDoJogador1= comprarcarta()
let cartaDoPc1= comprarcarta()
let cartaDoJogador2= comprarcarta()
let cartaDoPc2= comprarcarta()


let pontuaçãoJogador= cartasDoJogador1.valor+cartaDoJogador2.valor
let pontuaçãoPc= cartaDoPc1.valor+cartaDoPc2.valor

console.log ('usuario-cartas: ${cartaDoJogador1.texto}${cartaDoJogador2.texto}-${pontuaçãoJogador}')
console.log ('computador-cartas: ${cartaDoPc1.texto}${cartaDoPc2.texto}-${pontuaçãoPc}')

if (pontuaçãoJogador > pontuaçãoPc)
console.log ("O jogador ganhou ")

{if (pontuaçãoPc>pontuaçãoJogador) {
console.log ("O computador ganhou")

} else if (pontuaçãoPc === pontuaçãoJogador) {
console.log ("Empate")

}

} else {
	console.log ("O jogo acabou")
}