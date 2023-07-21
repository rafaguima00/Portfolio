import './curriculo.css'
import { objetivo, experiencia, formacoes } from './mocks/mockCurriculo'

const Curriculo = () => {
    return (
        <div className='CvContent'>
            <div className='Dados'>
                <h2 className='TituloCurriculo'>Meu currículo</h2>
                <ul className='ListaDados'>
                    <li>
                        Rafael Guimarães da Silva Moreira
                    </li>
                    <li>
                        Tel.: (71) 3012-6626
                    </li>
                    <li>
                        Celular: (71) 99663-4247
                    </li>
                    <li>
                        Email: <a className='EmailUser' href='mailto:rafael16gsm@gmail.com'>
                            rafael16gsm@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
            <div className='Dados'>
                <h2>Objetivo</h2>
                <p>{objetivo}</p>
            </div>
            <div className='Dados'>
                <h2>Experiências</h2>
                <p>{experiencia}</p>
            </div>
            <div className='Dados'>
                <h2>Formações</h2>
                <div className='Formacoes'>
                    <p>Análise e Desenvolvimento de Sistemas - Faculdade Visconde de Cairu (Cursando)</p>
                    {
                        formacoes.map((item, index) => (
                            <a key={index} href={item.url} target='_blank'>{item.name}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Curriculo;