import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Home } from './pages/home'
import { Header } from './components/header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}
