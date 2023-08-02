import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from "./routes";
import styled from 'styled-components'

const App = () => {

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