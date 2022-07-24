import {
  Heading,
  Text,
  Container,
  Divider,
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" align="center">404</Heading>
      <Text align="center">Sorry ! The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
    </Container>
  )
}

export default NotFound