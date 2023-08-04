import styled from 'styled-components'
import { tema } from '../../estilosGlobal'

const { backgroundBarraNavegacao, corTexto, corTextoMarcado } = tema;

const FooterComponent = styled.footer`
    background-color: ${backgroundBarraNavegacao};
    color: ${corTexto};
    padding: 1.3rem;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`
const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;

    a {
        color: ${corTexto};
        font-size: 20px;
        border: 2px solid ${corTextoMarcado};
        border-radius: .5rem;
        padding: 8px;
        box-sizing: border-box;
        text-align: center;
        transition: 300ms all;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    a:hover {
        transform: scale(1.05);
        background-color: ${backgroundBarraNavegacao};
        color: ${corTextoMarcado};
    }
`

export { FooterComponent, Links }