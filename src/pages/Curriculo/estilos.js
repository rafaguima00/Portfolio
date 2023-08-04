import styled from 'styled-components'
import { tema } from '../../estilosGlobal'

const { corTextoMarcado, backgroundBarraNavegacao } = tema;

const CvContent = styled.div`
    background: ${backgroundBarraNavegacao};
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    padding: 1rem 16rem;
`

const Titulo = styled.h2`
    text-align: center;
    text-transform: uppercase;
`

const Dados = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    p{
        font-size: 18px;
        padding: 0;
        margin: 0;
    }

    h2 {
        margin: 0;
        margin-bottom: .5rem;
        border-top: 1px solid #fff;
        padding-top: .3rem;
        font-size: 26px;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
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

const Formacao = styled.li`
    font-size: 18px;
    list-style: none;
    padding-bottom: 7px;
`

const ListaFormacao = styled.li`
    list-style: none;
    padding-bottom: 7px;
`

const LinkFormacao = styled.a`
    color: #2C9EC5;
    margin: 4px 0;
    border-bottom: 2px solid transparent;
    transition: 200ms all;
    font-size: 18px;

    &:hover {
        border-bottom: 2px solid ${corTextoMarcado};
    }
`

export { CvContent, Titulo, Dados, Lista, ItemLista, Email, Formacao, ListaFormacao, LinkFormacao }