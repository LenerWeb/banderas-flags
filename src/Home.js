
import { Container, Grid, CardMedia, CardContent, Card } from "@mui/material";
import { getDataFromPokemon } from "./services";
import { useEffect, useState } from "react";
import PokemonDetail from "./pokemonDetail";

const Home = () => {

   const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
   //vamos acrear una variable la cual se encargara de guradar la lista de pokemones 

   const [pokemons, setPokemon] = useState([])

   //debemos crear una funcion la cual se encarga de ejecutar a getdatafrompokemon

   const fetchPokemonList = async () => {
      const listPokemones = await getDataFromPokemon();

      console.log("listaPokemones", listPokemones.results);
      setPokemon(listPokemones.results);
   };

   // en react existe una funcion llamada useEffect la cual se ejecuta cuandola pagina esta iniciando, vamos a usar userEffect si queremos ejecutar algo al inicio de la aplicacion.
   //la estructura de usseEfect es :

   useEffect(() => {
      fetchPokemonList();
      //importante por ahora en los useEfect debemos colocar una array vacio esto se hace para evitar un bucle infinito, si mo clolocara el array 
   }, []);


   return (
      <Container>

         <h1>Pokedex</h1>
         {/* //para tener los pokemones en el dom */}
         {/* {pokemons.length>0 && 
            pokemons.map(pokemon =>
            <p>{pokemon.name}</p>
            )} */}

         <Grid container spacing={3}>

            {pokemons.map((pokemon, index) => (
               <Grid item md={4} sm={6} xs={12}>
                  <Card className="card-pokemon">
                     <CardMedia component="img" className="img-pokemon" image={`${imgUrl}${index + 1}.svg`} />
                     <CardContent clasName="center">
                        <h3 className="name-pokemon">{pokemon.name}</h3>
                        <PokemonDetail pepito={pokemon.name} url={pokemon.url}/>
                     </CardContent>

                  </Card>
               </Grid>
            ))}

         </Grid>



      </Container>
   )
}

export default Home;