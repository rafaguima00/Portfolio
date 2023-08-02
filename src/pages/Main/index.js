import { quemSouEu, segundoParagrafo } from './mocks/about'
import { Container, Content, Titulo, Redes, Links, Foto } from './estilos'
import { FaLinkedin, FaGithub } from "react-icons/fa"

const links = [
    {
        name: 'GitHub',
        url: 'https://github.com/rafaguima00',
        icon: <FaGithub size={28} />
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/rafael-guimar%C3%A3es-23362a218/',
        icon: <FaLinkedin size={28} />
    }
]

const Home = () => {
    return (
        <Container>
            <Content>
                <Titulo>Desenvolvedor Web <i>front-end</i></Titulo>
                <p>{quemSouEu}</p>
                <p>{segundoParagrafo}</p>
                <Redes>
                    <h3>Acesse minhas redes:</h3>
                    <Links>
                        {links.map(
                            (item, index) => (
                                <a key={index} href={item.url} target='_blank'>
                                    {item.icon}
                                    {item.name}
                                </a>
                            )
                        )}
                    </Links>
                </Redes>
            </Content>
            <div>
                <Foto
                    src='https://github.com/rafaguima00.png'
                    alt='Foto de perfil de Rafael Moreira'
                />
            </div>
        </Container>
    )
}

export default Home;