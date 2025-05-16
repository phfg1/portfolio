import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      accusamus odit et ab, blanditiis impedit laborum soluta. Dolorem nesciunt,
      temporibus iusto natus ducimus accusantium magnam esse obcaecati nihil
      praesentium quasi.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=phfg1&show_icons=true&theme=dracula&include_all_commits=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=phfg1&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
