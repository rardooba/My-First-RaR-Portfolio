import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 300) {
      setIsVisible(true)
    } else if (scrolled <= 300) {
      setIsVisible(false)
    }
  }

  //   useEffect(() => {

  //   }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <Container>
      <IconButton
        aria-label="Go top"
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<ChevronUpIcon />, <ChevronUpIcon />)}
        onClick={scrollToTop}
        style={{
          display: isVisible ? 'block' : 'none',
          boxShadow: '0px 0px 22px 6px rgba(0, 0, 0, 0.36)'
        }}
      ></IconButton>
    </Container>
  )
}

const Container = styled.div`
  display: inline-block;
  position: fixed;
  left: 49%;
  bottom: 80px;
`

export default GoTop
