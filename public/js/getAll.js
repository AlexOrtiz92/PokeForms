
const ulPokemon = document.querySelector("#listadoPok")
const boton = document.getElementById("boton");


const getAll = () => {

  const urlApi = "https://pokeapiaoo.herokuapp.com/api/pokemon"

  fetch(urlApi).then((response) => {
    return response.json()
  }).then((data) => {

    // const pokemon = data.pokemon
    //   .map((pokemon) => `<li class="list-group-item">${pokemon.name}</li>`
    //   )
    //   .reduce((acc, next) => acc + next, "");

    // ulPokemon.innerHTML = pokemon
    //ó
    ulPokemon.innerHTML = "";
    data.pokemon.forEach((pokemon) => {
      const li = document.createElement("li");//creamos un <li>
      li.appendChild(document.createTextNode(pokemon.name));//
      li.className = "list-group-item list-group-item-action";
      ulPokemon.appendChild(li)
    })

  }).catch((err) => {
    console.error(err)
  })

}

getAll();

boton.addEventListener("click", () => {
  getAll();
})
