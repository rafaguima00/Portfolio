import '../../App.css'
import './projetos.css'
import { projetos } from './mocks/projetos';

const Projetos = () => {
    return (
        <section className="ProjContent">
            {projetos.map((item, index) => (
                <a key={index} href={item.url} target='_blank' className='ListaItens'>
                    <img src={item.image} alt={item.nome} />
                    <div className='ConteudoProjeto'>
                        <h2>{item.nome}</h2>
                        <p>{item.descricao}</p>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default Projetos;