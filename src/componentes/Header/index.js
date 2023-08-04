import './estilos/header.css'
import { BarraNavegacao, Lista } from './estilos/estilo'

const Header = (props) => {

    return (
        <BarraNavegacao>
            <Lista>
                {props.listaIds.map((item, index) => <li key={index}>
                    <a
                        href={`#${item.id}`}
                        className='linkPage'
                    >
                        {item.name}
                    </a>
                </li>)}
            </Lista>
        </BarraNavegacao>
    )
}

export default Header;