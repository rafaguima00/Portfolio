import styled from 'styled-components'
import { tema } from '../../../estilosGlobal'

const { barraNavegacao, corTexto } = tema;

const BarraNavegacao = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${barraNavegacao};
    padding: 1.3rem;
    height: 10vh;
`

const Lista = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
    font-size: 1.3rem;
    color: ${corTexto}
`

export { BarraNavegacao, Lista }