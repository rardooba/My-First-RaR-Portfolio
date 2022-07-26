import {
  Button,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Link,
  Divider
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Profile from '../components/profile'
import Emojicon from '../components/emojicon'
import { useRef, useState } from 'react'
import ContactForm from '../components/contact-form'

const Page = () => {
  const [emoIndex, setEmoIndex] = useState(0)
  const ref = useRef(null)

  const getEmoji = () => {
    const emojis = ['😜', '🤓', '😘', '🤭', '🥱', '😴', '😵', '🤢', '🤮', '😡']

    let btn = ref.current

    if (emoIndex < emojis.length) {
      btn.innerText = emojis[emoIndex]
      setEmoIndex(prev => prev + 1)
    } else {
      setEmoIndex(0)
    }
  }

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          <i
            className="fa-solid fa-hand-spock fa-bounce"
            style={{ color: '#fbd38d', marginRight: '5px' }}
          ></i>
          Hello, I&apos;m a front-end React developer based in France!
        </Box>

        <Box display={{ md: 'flex' }} alignItems="center">
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              El Maïssoum Aboudrare
            </Heading>
            <p>Digital Craftsman ( Artist / Coder )</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Profile />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" textAlign="center">
            <Emojicon ref={ref} onMouseEnter={getEmoji}>
              😄
            </Emojicon>
            Who am&apos;I ?
          </Heading>

          <Paragraph>
            After 7 years of experience as a freelance web designer & graphic
            designer, I recently trained at Openclassrooms to start a career as
            a front-end developer specializing in React. I have a fairly
            atypical career path. While keeping an appetite for graphic and
            digital arts, I was able to test positions in catering and sales. My
            strength lies in my ability to adapt to change, inherited by my
            years as a freelancer where I was able to wear several hats, ranging
            from creative to project manager, including sales and accounting.
            Whatever the field, I enjoy learning new concepts, discovering tools
            and solving problems.
            <Link
              ml="10px"
              href="https://www.linkedin.com/in/maissoum-aboudrare/"
              target="_blank"
            >
              &gt; LinkedIN Profile
            </Link>
          </Paragraph>

          <Box align="center" my={4}>
            <Link href="/images/contents/CV_Aboudrare_Maissoum.pdf" download>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="orange"
                aria-label="My Cv"
              >
                <i
                  className="fa-solid fa-file-pdf"
                  style={{ fontSize: '1.5rem' }}
                ></i>
              </Button>
            </Link>
          </Box>
        </Section>
        <Divider my={6} />
        <Section delay={0.3}>
          <ContactForm />
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
