import styled from 'styled-components'
import { tema } from '../../estilosGlobal'

const { barraNavegacao, corTextoMarcado, corTexto } = tema;

const Container = styled.div`
    color: ${corTexto};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 2.6rem;
    margin: 0 16rem;
    padding: 2rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;

    p {
        text-align: justify;
        font-size: 18px;
    }
`

const Titulo = styled.h2`
    font-size: 28px;

    i {
        color: ${corTextoMarcado};
    }

`

const Redes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    a {
        color: ${corTexto};
        font-size: 20px;
        border: 2px solid ${corTextoMarcado};
        border-radius: .5rem;
        padding: 12px 1rem;
        box-sizing: border-box;
        width: 200px;
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
        background-color: ${barraNavegacao};
        color: ${corTextoMarcado};
    }
`

const Foto = styled.img`
    width: 280px;
    height: 280px;
    margin-top: 5rem;
    border-radius: 1rem;
    border: 4px solid ${corTextoMarcado};
`

export { Container, Content, Titulo, Redes, Links, Foto }