import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from "./routes";

const App = () => {

  return (
    <Router>
      <div className="Content">
        <Header />
        <Rotas />
        <Footer />
      </div>
    </Router>
  )
}

export default App;