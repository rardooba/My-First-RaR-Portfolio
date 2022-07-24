import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { Provider, createClient } from 'urql'

const Website = ({ Component, pageProps, router }) => {
  const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API })
  return (
    <Provider value={client}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </Provider>
  )
}

export default Website
