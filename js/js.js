const containerCARDS = document.querySelector("#containerCARDS");
var cards = document.getElementsByClassName("cards");
const criandoDiv = (personagem) => {
    personagem.results.map(function(results) {
        containerCARDS.innerHTML += ` 
        
                <div class="cards SlideADD">
                    <img src="${results.image}" alt="">
                    <h6>Nome</h6>
                    <p>${results.name}</p>
                    <h6>Status</h6>
                    <p>${results.status}</p>
                    <h6>Species</h6>
                    <p>${results.species}</p>
                    <h6>Type</h6>
                    <p>${results.type}</p>
                    <h6>Gender</h6>
                    <p>${results.gender}</p>
                </div>
          
       `;
    });
};

function apagando() {
    for (let index = 1; index <= cards.length; index = +1) {
        let a = 0;
        containerCARDS.removeChild(cards[a]);
        a = a + 1;
    }


}

const pesquisar = async() => {
    var nome = document.querySelector("#nomeInput").value;
    if (nome == "") {
        alert("Coloque o nome do personagem por favor!");
    } else {
        const url = `https://rickandmortyapi.com/api/character/?name=${nome}`;
        const dados = await fetch(url);
        const personagem = await dados.json();

        criandoDiv(personagem);
    }
};



const btn = document.querySelector("#btn");
btn.addEventListener("click", apagando);
btn.addEventListener("click", pesquisar);