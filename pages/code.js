import { Container, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import { createClient } from 'urql'
import Section from '../components/section'
import { CodeGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from '../lib/query'
import GoTop from '../components/go-top'
import arts from '../api/artData'

//TODO infinit scroll
//TODO Strapi
const Code = () => {
  //fetch data from strapi
  const client = createClient({
    url: process.env.NEXT_PUBLIC_BACKEND_API_CODEWORKS
  })
  const [result] = useQuery({ query: PRODUCT_QUERY, client })

  const { fetching, error, data } = result

  //Check the data coming in
  if (fetching)
    return (
      <Spinner
        size="xl"
        position="relative"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="50%"
      />
    )
  if (error) return <p>Oh no... {error.message}</p>

  const codeWorks = data.products

  console.log(codeWorks);

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Code
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {arts.map(work => (
            <Section delay={work.attributes.delay} key={work.attributes.slug}>
              <CodeGridItem
                title={work.attributes.title}
                description={work.attributes.description}
                github={work.attributes.githubLink}
                demo={work.attributes.liveDemoLink}
              />
            </Section>
          ))}
        </SimpleGrid>
        <GoTop />
      </Container>
    </Layout>
  )
}

export default Code
