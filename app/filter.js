const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))

btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros)

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) 
    const categoria = elementoBtn.value  


    let livrosfiltrados = categoria == 'disponivel' ? filtarpordisponibilidade() : filtrarporcategoria(categoria)
    exibirlivrosnatela(livrosfiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosfiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarporcategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarpordisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}