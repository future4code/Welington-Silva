console.log ("Seja bem vindo ao jogo blackjack !!")
if(confirm("pergunta de sim ou não")) {
	const iniciaUmNovojogo= true
} else {
	console.log ("O jogo acabou")
}
let faces= ("A, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,J ,Q ,K")
let valorDacarta = faces[Math.floor(Math.random ()*faces.length]
let nipes = ("Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)")
let nipeDaCarta = nipes [Math.floor(Math.random ()*nipes.length]


///falta o sistema de pontuação
//falta validar o resultado dos jogos 
//falta conclusão dos  desafios 