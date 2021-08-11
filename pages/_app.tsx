import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const MyApp:React.FC<AppProps> = ({Component,pageProps}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps}/>
      </ThemeProvider>
    </>
  )
}
export default MyApp
