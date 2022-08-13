import { Container, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import Section from '../components/section'
import { CodeGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import { useQuery } from 'urql'

import { PRODUCT_QUERY } from '../lib/query'

import NoSsr from '../components/no-ssr'

import GoTop from '../components/go-top'

//TODO infinit scroll
//TODO Strapi
const Code = () => {
  //fetch data from strapi

  const [results] = useQuery({ query: PRODUCT_QUERY })

  const { data, fetching, error } = results

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

  const codeWorks = data.codeWorks.data

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Code
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <NoSsr>
            {codeWorks.map(work => (
              <Section delay={work.attributes.delay} key={work.attributes.slug}>
                <CodeGridItem
                  title={work.attributes.title}
                  description={work.attributes.description}
                  github={work.attributes.githubLink}
                  demo={work.attributes.liveDemoLink}
                  // thumbnail={
                  //   work.attributes.image.data.attributes.formats.small.url
                  // }
                  // icon={work.attributes.logo.data.attributes.url}
                />
              </Section>
            ))}
          </NoSsr>
        </SimpleGrid>
        <NoSsr>
          <GoTop />
        </NoSsr>
      </Container>
    </Layout>
  )
}


export default Code
