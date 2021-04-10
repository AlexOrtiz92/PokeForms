const searchPokemon = () => {

  const idPokemon = document.getElementById("idPokemonSearch").value;
  const urlApi = `https://pokeapiaoo.herokuapp.com/api/onepokemon?id=${idPokemon}`

  fetch(urlApi).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data)

    document.getElementById("idPokemon").value = data.pokemon.id
    document.getElementById("namePokemon").value = data.pokemon.name
    document.getElementById("typePokemon").value = data.pokemon.type

  }).catch((err) => {
    console.error(err)
  })
}

const putPokemon = () => {


  const idPokemon = document.getElementById("idPokemon").value;
  const urlApi = `https://pokeapiaoo.herokuapp.com/api/pokemon/${idPokemon}`

  const name = document.getElementById("namePokemon").value;
  const type = document.getElementById("typePokemon").value;

  const properties = {
    name: name,
    type: type
  }

  const opts = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(properties)
  }


  fetch(urlApi, opts).then((response) => {
    return response.json();
  }).then((data) => {

    console.log(data)

    alert("Pokemon actualizado correctamente");
    document.getElementById("idPokemonSearch").value = ""
    document.getElementById("idPokemon").values = ""
    document.getElementById("namePokemon").value = "";
    document.getElementById("typePokemon").value = "";


  }).catch((err) => {
    console.error(err)
  })

}