import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Currículo",
      path: "/curriculo"
    },
    {
      name: "Projetos",
      path: "/projects"
    },
  ]

    return (
        <nav className='navBar'>
            <ul>
                {links.map((item, index) => <li key={index}>
                    <Link
                        to={item.path}
                        className='linkPage'
                    >
                        {item.name}
                    </Link>
                </li>)}
            </ul>
        </nav>
    )
}

export default Header;