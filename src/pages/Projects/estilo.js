import styled from 'styled-components'
import code from '../../imagens/code.jpg'
import { tema } from '../../estilosGlobal'

const { backgroundBarraNavegacao } = tema;

const Container = styled.section`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.6rem;
    padding: 1rem 16rem 2rem;
    background-image: url(${code});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-attachment: fixed;
`

const Titulo = styled.h2`
    text-align: center;
    text-transform: uppercase;
`

const Projeto = styled.a`
    color: #fff;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    box-sizing: border-box;
    transition: 400ms all;
    border: 2px solid #f4f4f4;
    border-radius: 25px;
    padding: 16px;
    background-color: ${backgroundBarraNavegacao};

    &:hover {
        transform: scale(1.05);
    }
`

const ImagemProjeto = styled.img`
    width: 420px;
    height: 260px;
    border-radius: 12px;
    box-shadow: 2px 4px 8px #000;
`

const TextoProjeto = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.6rem;
    }

    p {
        font-size: 1.1rem;
    }
`

export { Container, Titulo, Projeto, ImagemProjeto, TextoProjeto }