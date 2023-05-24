let  btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPorPreco.addEventListener('click' ,ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosordenados = livros.sort( (a,b)=> a.preco - b.preco)
    exibirlivrosnatela(livrosordenados)  
}