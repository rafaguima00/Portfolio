import { objetivo, experiencia, formacoes } from './mocks/mockCurriculo'
import { CvContent, Titulo, Dados, Lista, ItemLista, Email, Formacao, ListaFormacao, LinkFormacao } from "./estilos"

const Curriculo = (props) => {
    return (
        <CvContent id={props.id}>
            <Titulo>Currículo</Titulo>
            <Dados>
                <Lista>
                    <ItemLista>
                        Rafael Guimarães da Silva Moreira
                    </ItemLista>
                    <ItemLista>
                        Tel.: (71) 3012-6626
                    </ItemLista>
                    <ItemLista>
                        Celular: (71) 99663-4247
                    </ItemLista>
                    <ItemLista>
                        Email: <Email target="_blank" href='http://mailto:rafael16gsm@gmail.com'>
                            rafael16gsm@gmail.com
                        </Email>
                    </ItemLista>
                </Lista>
            </Dados>
            <Dados>
                <h2>Objetivo</h2>
                <p>{objetivo}</p>
            </Dados>
            <Dados>
                <h2>Experiências</h2>
                <p>{experiencia}</p>
            </Dados>
            <Dados>
                <h2>Formações</h2>
                <ul>
                    <Formacao>Análise e Desenvolvimento de Sistemas - Faculdade Visconde de Cairu (Cursando)</Formacao>
                    {
                        formacoes.map((item, index) => (
                            <ListaFormacao key={index}>
                                <LinkFormacao href={item.url} target='_blank'>
                                    {item.name}
                                </LinkFormacao>
                            </ListaFormacao>
                        ))
                    }
                </ul>
            </Dados>
        </CvContent>
    )
}

export default Curriculo;