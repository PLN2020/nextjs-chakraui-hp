// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import '@fontsource/poppins/700.css'
import '@fontsource/noto-sans/400.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp