import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Layout from '../components/Layout'

const MyApp:React.FC<AppProps> = ({Component,pageProps}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ThemeProvider>
    </>
  )
}
export default MyApp
