import Home from "../pages/Main"
import Curriculo from "../pages/Curriculo"
import Projetos from "../pages/Projects";
import { Routes, Route } from "react-router-dom";

const Rotas = () => {
  return <>
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/curriculo" element={<Curriculo />} />
    </Routes>
    <Routes>
      <Route path="/projects" element={<Projetos />} />
    </Routes>
  </>

}

export default Rotas;