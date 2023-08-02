import './estilos/header.css'
import { Link } from 'react-router-dom'
import { BarraNavegacao, Lista } from './estilos/estilo'

const Header = () => {

  const links = [
    {
      name: "Home",
      path: ""
    },
    {
      name: "Currículo",
      path: "curriculo"
    },
    {
      name: "Projetos",
      path: "projects"
    },
  ]

    return (
        <BarraNavegacao>
            <Lista>
                {links.map((item, index) => <li key={index}>
                    <Link
                        to={`${item.path}`}
                        className='linkPage'
                    >
                        {item.name}
                    </Link>
                </li>)}
            </Lista>
        </BarraNavegacao>
    )
}

export default Header;