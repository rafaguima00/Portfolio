import styled from 'styled-components'

const Container = styled.section`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.6rem;
    margin: 0 16rem;
    padding: 2rem;
`

const Projeto = styled.a`
    color: #fff;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    box-sizing: border-box;
    transition: 400ms all;

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

export { Container, Projeto, ImagemProjeto, TextoProjeto }