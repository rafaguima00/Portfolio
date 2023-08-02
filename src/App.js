import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from "./routes";
import styled from 'styled-components'

const App = () => {

  // Tarefas do dia: 
  // 1- Adicionar o styled components [OK]
  // 2- Editar os botões do Linkedin e GitHub [OK]
  // 3- Colocar todos elementos em apenas uma Rota [OK]
  // 4- Editar a fonte do site para 'Roboto' [OK]

  const AppContainer = styled.div`
    min-height: 100vh;
    background-color: #383838;

    * {
      text-decoration: none;
    }
  `

  return (
    <Router>
      <AppContainer>
        <Header />
        <Rotas />
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App;