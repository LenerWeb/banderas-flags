import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home"
import Git from '../PracticaGit'
import Poke from '../Pokemon'
import Flags from "../Flags";

//nuestro router va a ser un com,ponente el cual se encarga de retornar las rutas de su respectiva vista

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Flags/>} />
                <Route path="home" element={<Home />} />
                <Route path="git" element={<Git />} />
                <Route path="pokemon" element={<Poke />} />
            </Routes>

        </BrowserRouter>

    )

}

export default Router;