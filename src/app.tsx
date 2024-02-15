import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/header'
import { Profile } from './components/profile'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Header />
        <Profile />
        <section>
          <form>
            <input type="text" placeholder="Buscar conteúdo" />

            <div>Issues - display: grid</div>
          </form>
        </section>
      </main>

      <GlobalStyle />
    </ThemeProvider>
  )
}
