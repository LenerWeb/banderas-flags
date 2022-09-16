import { Container, Grid, FormControl, InputLabel, TextField, Select, MenuItem, Card, CardMedia, CardContent, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react";
import { getDataFromPokemon } from "../services";
import FlagsDetail from "../flagsDetail";

const Flags = () => {

   const [countries, setCountries] = useState([]);

   const [region, setRegion] = useState("");

   const fetchCountries = async () => {
      const response = await getDataFromPokemon("https://restcountries.com/v3.1/all");

      setCountries(response);
   };

   const handleRegion = async (e) => {
      setRegion(e.target.value);
      //vamos a evaluar si el valor es igual all entonces ejecuta la funcion fetchCountries
      if (e.target.value === "all") {
         fetchCountries();
         return;
      }
      //primero debemos limpiar para llevar con nueva informacion
      setCountries([]);
      const response = await getDataFromPokemon(`https://restcountries.com/v3.1/region/${e.target.value}`);

      setCountries(response);
   };
   //vamos a crear una funcion la cual se encarga de buscar los paises
   const handleSearchCountry = (e) => {
      //esto es unabuena practica decirle que buscque p´por 3 o 4 letras la peticion
      const countryName = e.target.value;

      if (countryName.length === 0) {
         fetchCountries();
      }

      if (countryName.length > 3) {
         //aca debemos iniciar la busqueda
         //para poder hacer la busqueda debes transformar todo el text a UPPERCASE OR LOWECASE
         const filterCountries = countries.filter((country) => country.name.official.toUpperCase().includes(countryName.toUpperCase())
         );
         setCountries(filterCountries);
      }

   };
   ////////
   useEffect(() => {
      fetchCountries();
   }, []);


   return (
      <Container>
         <Grid container spacing={3} mt={2}>
            <Grid item md={6} sm={6}>
               <TextField onChange={handleSearchCountry} multiline label="busca tu bandera" fullWidth />
            </Grid>
            <Grid item md={6} sm={6} xs={4}>
               <FormControl fullWidth>
                  <InputLabel>busca tu region</InputLabel>
                  <Select
                     label="busca tu bandera"
                     value={region}
                     onChange={handleRegion}>
                     <MenuItem value="all">Todas las regiones</MenuItem>
                     <MenuItem value="Africa">Africa</MenuItem>
                     <MenuItem value="Americas">Americas</MenuItem>
                     <MenuItem value="Asia">Asia</MenuItem>
                     <MenuItem value="Europe">Europe</MenuItem>
                     <MenuItem value="Oceania">Oceania</MenuItem>
                  </Select>
               </FormControl>
            </Grid>

            {countries.length > 0 ? (
               countries.map((country) => (
                  <Grid item md={3} sm={6} xs={9} >

                     <Card>
                        <CardMedia
                           component="img"
                           sx={{ height: 150 }}
                           image={country.flags.svg}
                        />

                        <CardContent>
                           <h4>{country.translations.spa.common}</h4>
                           <FlagsDetail pais={country.name.common} url={country.url} />
                           

                        </CardContent>
                     </Card>

                  </Grid>
               ))
            ) : (
               <div className="center loading">
                  <CircularProgress />
                  <h4>Cargando...</h4>
               </div>
            )}

         </Grid>

      </Container>
   );
};

export default Flags;