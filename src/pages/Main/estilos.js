import styled from 'styled-components'
import { tema } from '../../estilosGlobal'
import laptop from '../../imagens/laptop.jpg'

const { backgroundBarraNavegacao, corTextoMarcado, corTexto } = tema;

const Container = styled.div`
    color: ${corTexto};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 16rem;
    position: relative;
    opacity: 1;
    zIndex: -1;
    background-image: url(${laptop});
    background-position: 80% 80%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    &:after {
        background: linear-gradient()
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.3rem;
    background-color: ${backgroundBarraNavegacao};
    padding: 2rem;
    border-radius: 16px;
`

const Titulo = styled.h2`
    font-size: 28px;

    i {
        color: ${corTextoMarcado};
    }

`

const Texto = styled.section`
    display: flex;
    flex-direction: column;

    p {
        text-align: justify;
        font-size: 18px;
    }
`

const Foto = styled.img`
    width: 280px;
    height: 280px;
    border-radius: 1rem;
    border: 4px solid ${corTextoMarcado};
`

export { Container, Content, Texto, Titulo, Foto }