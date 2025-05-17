import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
    corDeFundo: string
    corDaBorda: string
    corDoBotao: string
  }
}

const temaLight = {
  corPrincipal: '#282a35',
  corSecundaria: '#949494',
  corDeFundo: '#fff',
  corDaBorda: '#c1c1c1',
  corDoBotao: '#4476bf'
}

export default temaLight
