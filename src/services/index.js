


const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100"

//funcion generica para la url pararecibir los pokemones
//url sera el parametro que recivba la url de la peticion
//url=base_url significa que si la url esta vacia cuando llamemosla funcion no le pasamos el valor por defecto sera base_url, url tomara el calor base de URL
//url toma el valor http// link.com

export const getDataFromPokemon = async (url= BASE_URL)=>{
    try {
        const responde  = await fetch(url)
        const data = await responde.json();
        console.log("data",data);
        return data;

    } catch (error) {
        console.log(error.mesage)
    }

}

