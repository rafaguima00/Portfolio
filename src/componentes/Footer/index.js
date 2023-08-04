import { FooterComponent, Redes, Links } from "./estilos";
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

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <FooterComponent>
            <p>© Desenvolvido por Rafael Moreira - {currentYear}</p>
            <Links>
                {links.map(
                    (item, index) => (
                        <a key={index} href={item.url} target='_blank'>
                            {item.icon}
                        </a>
                    )
                )}
            </Links>
        </FooterComponent>
    )
}

export default Footer;