import { objetivo, experiencia, formacoes } from './mocks/mockCurriculo'
import { CvContent, Dados, Lista, ItemLista, Email, Formacao, LinkFormacao } from "./estilos"

const Curriculo = () => {
    return (
        <CvContent>
            <Dados>
                <h2>Meu currículo</h2>
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
                        Email: <Email href='mailto:rafael16gsm@gmail.com'>
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
                <div>
                    <Formacao>Análise e Desenvolvimento de Sistemas - Faculdade Visconde de Cairu (Cursando)</Formacao>
                    {
                        formacoes.map((item, index) => (
                            <LinkFormacao key={index} href={item.url} target='_blank'>
                                {item.name}
                            </LinkFormacao>
                        ))
                    }
                </div>
            </Dados>
        </CvContent>
    )
}

export default Curriculo;