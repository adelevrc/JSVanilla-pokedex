let pokemonId = 1;
let sound = document.getElementById("myAudio");


function getData(id){
    let apiURL= `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    fetch (apiURL)
    .then( (data)=> data.json())
    .then((pokemon) => generateHTML(pokemon))
}
//console.log(apiURL);

getData(pokemonId);

function pokeSlideRight() {
    sound.play(); 
    pokemonId ++;
    getData(pokemonId);
    
}

function pokeSlideLeft() {
    sound.play(); 
    pokemonId --;
    getData(pokemonId);
}

    const generateHTML = (data) => {
        console.log(data)
        const html = `

            <div id = "sprites">
                <button id = "left" onclick = "pokeSlideLeft()"> < </button>
                <div id = "frame_sprites">
                    <img  id = "img-sprites" src = ${data.sprites.front_shiny}>
                </div>
                <button id = "right" onclick = "pokeSlideRight()"> > </button>
            </div>  

            
            <div class="details">

                <div class = "bloc-name">
                    <img class = "img-name" src ="pokeball5050.png"/>
                    <h1 class = "name"> ${data.name} </h1> 
                </div>

                <div id = "bloc_feature1">
                    <img class = "img-stars" src="stars_5050.png"/>
                    <h2 class= "feature1"> Ability 1 : ${data.abilities[0].ability.name}</h2>
                </div>

                <div id = "bloc_feature2">
                    <img class = "img-stars" src="stars_5050.png"/>
                    <h2 class ="feature2"> Ability 2 : ${data.abilities[1].ability.name}</h2>
                </div>
        
            </div>
                `

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}


