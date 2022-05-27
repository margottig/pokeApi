console.log('Hola Mundo');


let url = ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/",".png"];
let urlCompleta = [];


function fetchPokemon() {
    for (let i = 0; i<=1000; i++ ){
        urlCompleta.push(url[0]+i+url[1])
        // console.log(urlCompleta);
        var imagen = document.createElement("img");
        imagen.src=urlCompleta[i];
        imagen.classList.add("img-thumbnail");
        
        document.body.appendChild(imagen);
       
    }

    /*
    var resultado = fetch (urlCompleta[i]);
     return urlCompleta;
     */
}
/*
async function capturaPokemon(){
    let resultado = await fetchPokemon();
    resultado.json();
    console.log(resultado);
    
    var imagen = document.createElement("img");
    imagen.src=resultado.url;
    document.body.appendChild(imagen);
}
*/

/*
var capturaPokemon = async () =>{
    var resultado = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    resultado.json();
    console.log(resultado);
 
}
*/

