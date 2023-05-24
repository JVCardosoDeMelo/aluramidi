function aplicardesconto(livros){
    const desconto = 0.3
    livroscomdesconto = livros.map(livro =>{
        return {...livro, preco:livro.preco - (livro.preco * desconto)}
        })
        return livroscomdesconto
}