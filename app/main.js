let livros = [] 
const endpointdaapi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarlivrosdaapi() 

async function getBuscarlivrosdaapi(){
    const res = await fetch(endpointdaapi)
    livros = await res.json()
    let livroscomdesconto = aplicardesconto(livros)
    console.table(livros)
    exibirlivrosnatela(livroscomdesconto)

    
}