import styled from 'styled-components'
import { tema } from '../../../estilosGlobal'

const { backgroundBarraNavegacao, corTexto } = tema;

const BarraNavegacao = styled.nav`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${backgroundBarraNavegacao};
    padding: 1.3rem;
    height: 10vh;
    zIndex: 10;
`

const Lista = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    font-size: 1.3rem;
    color: ${corTexto};
`

export { BarraNavegacao, Lista }