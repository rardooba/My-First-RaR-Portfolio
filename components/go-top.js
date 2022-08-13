import { IconButton, useColorModeValue, Box } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <Box
      pos="fixed"
      display="inline-block"
      left={{ base: '44%', md: '49%' }}
      bottom="80px"
      zIndex="85"
    >
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
    </Box>
  )
}

export default GoTop
