import { useState } from "react"

const Poke = () => {

   /* const [search, setSearch] = useState(""); */

   const [user, setUser] = useState({});

   const fetchUser = async () => {
      try {
         const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
         const data = await response.json();
         setUser(
            data.results
            );
            
      } catch (error) {
         console.log("error")
      }
   }

   return (
      <div className="container">
         <h1>Buscador de Pokemon</h1>
         <div className="grid">
            <input /* onChange={(e) => setSearch(e.target.value)} */ type="text" placeholder="Ingresa el usuario" />
         </div>
         <div>
            <button onClick={fetchUser}>Buscar</button>
         </div>
         <article data-theme="dark">
            <div className="container">
               <img src="" alt="" />
               <h4>Pokemon {user}</h4>
               <p>{user}</p>
               <p></p>
            </div>
         </article>
      </div>
   )
}


export default Poke;