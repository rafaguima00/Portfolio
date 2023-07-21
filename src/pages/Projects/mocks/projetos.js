import battleBotImage from '../../../../src/imagens/pagina-battle-bot.png'
import tomJazzImage from '../../../../src/imagens/pagina-toms-jazz.png'
import rickAndMortyImage from '../../../../src/imagens/pagina-rick-morty.png'
import numeroSecretoImage from '../../../../src/imagens/pagina-num-secreto.png'

export const projetos = [
    {
        nome: "Battle Bot Landing Page",
        descricao: "Este site apresenta a Landing Page de um robô que modera a comunidade no Discord de Rafaella Ballerini. As linguagens utilizadas foram HTML e CSS. Também foi trabalhado o design responsivo",
        image: battleBotImage,
        url: "https://battle-bot-landing-page.vercel.app/"
    },
    {
        nome: "Tom's Jazz School",
        descricao: "Este site é uma Landing page de uma escola de música. As linguagens utilizadas foram HTML, CSS e Javascript",
        image: tomJazzImage,
        url: "https://tom-s-jazz-school-six.vercel.app/"
    },
    {
        nome: "Personagens de Rick and Morty",
        descricao: "Consumindo API e apresentando todos os personagens da série Rick and Morty com Javascript puro",
        image: rickAndMortyImage,
        url: "https://personagens-rick-and-morty-eight.vercel.app/"
    },
    {
        nome: "Número secreto",
        descricao: "Projeto Número Secreto é um jogo que utiliza o reconhecimento de voz por meio da Web Speech API. Na inicialização da página é gerado um número aleatório e o usuário tem que adivinhar e falar pelo microfone do dispositivo até acertar o número secreto",
        image: numeroSecretoImage,
        url: "https://numero-secreto-two-beryl.vercel.app/"
    },
]