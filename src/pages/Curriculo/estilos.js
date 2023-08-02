import styled from 'styled-components'

const CvContent = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin: 0 16rem;
    padding: 2rem;
`

const Dados = styled.div`
    display: flex;
    flex-direction: column;

    p{
        font-size: 18px;
        padding: 0;
        margin: 0;
    }
`

const Lista = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`

const ItemLista = styled.li`
    line-height: 22px;
    font-size: 18px;
`

const Email = styled.a`
    color: #2C9EC5;
`

const Formacao = styled.p`
    padding-bottom: 12px;
`

const LinkFormacao = styled.a`
    display: block;
    color: #2C9EC5;
    margin: 4px 0;
    box-sizing: border-box;
    font-size: 18px;

    &:hover {
        text-decoration: underline;
    }
`

export { CvContent, Dados, Lista, ItemLista, Email, Formacao, LinkFormacao }