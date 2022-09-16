import { useState } from "react"

const Git = () => {

   const [search, setSearch] = useState("");
   const [user, setUser] = useState({});

   const fetchUser = async () => {
      try {
         const response = await fetch(`https://api.github.com/users/${search}`)
         const data = await response.json();
         setUser(data)
      } catch (error) {
         console.log("error", error.message)
      }
   }

   return (
      <div className="container">
         <h1>Buscador de usuarios</h1>
         <div className="grid">
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Ingresa el usuario" />
         </div>
         <div>
            <button onClick={fetchUser}>Buscar</button>
         </div>
         <article data-theme="dark">
            <div className="container">
               <img src={user.avatar_url} alt="" />
               <h4>{user.name}</h4>
               <p>{user.location}</p>
               <p>{user.bio}</p>
            </div>
         </article>
      </div>
   )
}

export default Git