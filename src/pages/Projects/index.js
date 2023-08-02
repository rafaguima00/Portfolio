import { projetos } from './mocks/projetos';
import { Container, Projeto, ImagemProjeto, TextoProjeto } from './estilo'

const Projetos = () => {
    return (
        <Container>
            {projetos.map((item, index) => (
                <Projeto key={index} href={item.url} target='_blank'>
                    <ImagemProjeto src={item.image} alt={item.nome} />
                    <TextoProjeto>
                        <h1>{item.nome}</h1>
                        <p>{item.descricao}</p>
                    </TextoProjeto>
                </Projeto>
            ))}
        </Container>
    )
}

export default Projetos;