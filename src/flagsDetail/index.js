import { Button, Dialog, DialogContent, Grid, Chip, Divider, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { getDataFromPokemon } from "../services";

const FlagsDetail = (props) => {

   const [abrir, setAbrir] = useState(false);

   const [flagsData, setFlagsData] = useState({})

   /*  const [pais, setPais] = useState ("")
 
    const paisUrl = `https://restcountries.com/v3.1/name/peru`; */

   const fetchDetailFlags = async () => {
      const flags = await getDataFromPokemon(`https://restcountries.com/v3.1/name/${props.pais}`);
      setFlagsData(flags)
      console.log("flags", flags)
   }

   const handleAbrirDialog = async () => {

      if (!abrir) {

         await fetchDetailFlags();
      }

      setAbrir(!abrir)
   }

   return (
      <div>
         <Button onClick={handleAbrirDialog} variant="contained">Detalles</Button>
         <Dialog open={abrir} onClose={handleAbrirDialog} width={650}>
            <DialogContent>
               {flagsData.length > 0 && (
                  flagsData.map((flag) => (

                     <Grid container spacing={1} mt={0} mb={5} >
                        <Grid container item md={12} >
                           <Grid md={6} xs={6} mb={0} >
                              <h2>{flag.translations.spa.common}</h2>
                           </Grid>
                           <Grid md={6} xs={6} border= {1}> 
                              <img  src={flag.flags.svg} />
                           </Grid>

                        </Grid>

                        <Grid item md={12}  xs={12} mb={0}>
                           <h5>Detalle del pais</h5>
                           <Divider />
                           <Grid >
                              <ListItem>
                                 <ListItemText primary="Poblacion" />
                                 <Chip
                                    label={flag.population}
                                    color="success"
                                 />
                              </ListItem>
                           </Grid>

                           <Divider />
                           <Grid>
                              <ListItem>
                                 <ListItemText primary="Capital" />
                                 <Chip
                                    label={flag.capital}
                                    color="success"
                                 />
                              </ListItem>
                           </Grid>
                           <Divider />

                           <Grid>
                              <ListItem>
                                 <ListItemText primary="Region" />
                                 <Chip
                                    label={flag.region}
                                    color="success"
                                 />
                              </ListItem>
                           </Grid>
                           <Divider />

                           <Grid>
                              <ListItem>
                                 <ListItemText primary="Continente" />
                                 <Chip
                                    label={flag.subregion}
                                    color="success"
                                 />
                              </ListItem>
                           </Grid>
                           <Divider />

                        </Grid>
                     </Grid>


                  ))

               )}
               <Button variant="contained" onClick={handleAbrirDialog}>Cerrar</Button>
            </DialogContent>

         </Dialog>


      </div>

   );

};

export default FlagsDetail;