const elementoparainserirlivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirlivrosnatela(listadelivros){
  elementoComValorTotalDeLivrosDisponiveis.innerHTML =''
  elementoparainserirlivros.innerHTML= ''
  // let disponibilidade = verificardisponibilidadedolivro(livro)
    listadelivros.forEach(livro => {
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
       elementoparainserirlivros.innerHTML +=`<div class="livro">
       <img class="${disponibilidade}" src="${livro.imagem}"
         alt="${livros.alt}" />
       <h2 class="livro__titulo">
         ${livro.titulo}
       </h2>
       <p class="livro__descricao">${livro.autor}</p>
       <p class="livro__preco" id="preco"> R$ ${livro.preco.toFixed(2)}</p>
       <div class="tags">
         <span class="tag">${livro.categoria}</span>
       </div>
     </div>`
    });
}

// function verificardisponibilidadedolivro(livro){

//   if(livro.quantidade > 0) {
//     return 'livro__imagens'
//   }else{
//     return 'livro__imagens indisponivel'

//   }
// }