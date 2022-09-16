import { Button, Dialog, DialogContent, Grid, Chip } from "@mui/material";
import { useState } from "react";
import { getDataFromPokemon } from "../services";

const PokemonDetail = (props) => {
   const [abrir, setAbrir] = useState(false);
   //vamos a hacer una funcion que maneje el estado
   const [pokemonData, setPokemonData] = useState({})

   const fetchDetailFromPokemon = async () => {
      const pokemon = await getDataFromPokemon(props.url);
      setPokemonData(pokemon)
   }

   const handleOpenDialog = async () => {
      if (!abrir) {
         await fetchDetailFromPokemon()
      }
      setAbrir(!abrir)
   }

   /* const openDialog = () => {
       setOpen(true)
   }

   const closeDialog = () => {
       setOpen(false)
   } */

   return (
      <div>
         <Button onClick={handleOpenDialog} variant="contained" color="secondary">Detalle del Pokemon</Button>
         <Dialog open={abrir} onClose={handleOpenDialog}>
            <DialogContent>
               {/* necesitamos extraer dos keys de un objeto */}
               {Object.keys(pokemonData).length > 0 && (
                  <div>
                     <h2 >{props.pepito}</h2>

                     <Grid container>
                        <Grid item md={6}>
                           <h4>Habilidades</h4>
                           {pokemonData.abilities.map((abilitie) => (
                              <Chip
                                 label={abilitie.ability.name}
                                 color="primary"
                                 sm={{ marginBottom: 2 }}
                                 sx={{ marginRight: 2 }}
                                 md={{ marginBottom: 2 }}
                              />
                           ))}
                           <h4>Datos</h4>
                           {pokemonData.types.map((type) => (
                              <Chip
                                 label={type.type.name}
                                 color="error"
                                 sx={{ marginRight: 2 }} />
                           ))}
                           <Chip
                              label={`${pokemonData.height / 10} m`}
                              color="success"
                              sx={{ marginRight: 2 }} />
                           <Chip
                              label={`${pokemonData.weight / 10} Kg`}
                              color="success" />
                           <Grid item>
                              <img width={300} src={pokemonData.sprites.other["official-artwork"].front_default} />
                           </Grid>
                           <Grid container>
                              <Grid item sm={6}>
                                 <img src={pokemonData.sprites.versions["generation-iii"].emerald["front_shiny"]} width={100} alt="" />
                              </Grid>
                           </Grid>
                        </Grid>
                     </Grid>
                  </div>
               )}

               <Button variant="contained" onClick={handleOpenDialog}>Cerrar</Button>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default PokemonDetail;