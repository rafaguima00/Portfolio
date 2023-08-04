import { quemSouEu, segundoParagrafo } from './mocks/about'
import { Container, Content, Texto, Titulo, Foto } from './estilos'

const Home = (props) => {
    return (
        <Container id={props.id}>
            <Titulo>Desenvolvedor Web <i>front-end</i></Titulo>
            <Content>
                <Texto>
                    <p>{quemSouEu}</p>
                    <p>{segundoParagrafo}</p>
                </Texto>
                <div>
                    <Foto
                        src='https://github.com/rafaguima00.png'
                        alt='Foto de perfil de Rafael Moreira'
                    />
                </div>
            </Content>
        </Container>
    )
}

export default Home;