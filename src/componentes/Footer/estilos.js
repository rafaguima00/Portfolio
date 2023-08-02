import styled from 'styled-components'
import { tema } from '../../estilosGlobal'

const { barraNavegacao, corTexto } = tema;

const FooterComponent = styled.footer`
    background-color: ${barraNavegacao};
    color: ${corTexto};
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`

export { FooterComponent }