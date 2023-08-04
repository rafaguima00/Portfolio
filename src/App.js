import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Main"
import Curriculo from "./pages/Curriculo"
import Projetos from "./pages/Projects";
import styled from 'styled-components'

const App = () => {
  const AppContainer = styled.div`
    min-height: 100vh;
    background-color: #000;

    * {
      text-decoration: none;
    }
  `

  const listaIds = [
    {
      name: "Home",
      id: "home"
    },
    {
      name: "Currículo",
      id: "curriculo"
    },
    {
      name: "Projetos",
      id: "projects"
    },
  ]

  return (
    <Router>
      <AppContainer>
        <Header listaIds={listaIds} />
        <Home id={"home"} />
        <Curriculo id={"curriculo"} />
        <Projetos id={"projects"} />
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App;