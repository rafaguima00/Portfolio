import './main.css'
import '../../App.css'
import {quemSouEu, segundoParagrafo} from './mocks/about'

const links = [
    {
        name: 'GitHub',
        url: 'https://github.com/rafaguima00'
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/rafael-guimar%C3%A3es-23362a218/'
    }
]

const Home = () => {
    return (
        <div className='MainContent'>
            <div className='QuemSouEu'>
                <h2>Desenvolvedor Web <i>front-end</i></h2>
                <p>{quemSouEu}</p>
                <p>{segundoParagrafo}</p>
                <div className='redes'>
                    <h3>Acesse minhas redes:</h3>
                    <div className='ContentLinks'>
                        {links.map(
                            (item, index) => (
                                <a key={index} href={item.url} target='_blank'>
                                    {item.name}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div>
                <img 
                    src='https://github.com/rafaguima00.png' 
                    alt='Foto de perfil de Rafael Moreira' 
                    className='imagem' 
                />
            </div>
        </div>
    )
}

export default Home;