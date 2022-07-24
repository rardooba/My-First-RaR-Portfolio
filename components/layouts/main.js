import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import EyeRardooba from '../eye-rardooba'
//import NoSsr from '../no-ssr'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rardooba's homepage" />
        <meta name="author" content="rardooba" />
        <meta name="author" content="rardooba" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="rardooba" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rardooba" />
        <meta name="twitter:creator" content="@rardooba" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="rardooba" />
        <meta name="og:title" content="rardooba" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Rardooba - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <EyeRardooba />

        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
