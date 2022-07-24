import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  
  img {
    transform: scale(0.7);
    transition: transform 0.2s ease-out;
  }
  
  &:hover img {
    transform: scale(1);
  }
`

const Logo = () => {
  const footPrintImg = `/images/eye${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={30} height={30} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Roboto"
            fontWeight="bold"
            ml={3}
            letterSpacing={1}
          >
            {"<Art to Code/>"}
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
