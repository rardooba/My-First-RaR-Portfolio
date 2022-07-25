import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ArtGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import arts from '../api/artData'

import GoTop from '../components/go-top'

const Art = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Art
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {arts.map(art => (
            <Section delay={0.1} key={art.id}>
              <ArtGridItem title={art.title} thumbnail={art.image} />
            </Section>
          ))}
        </SimpleGrid>
        <GoTop />
      </Container>
    </Layout>
  )
}

export default Art
