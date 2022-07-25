import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Flex,
  Link,
  Heading
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import { motion } from 'framer-motion'
import { useState } from 'react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const CodeGridItem = ({
  title,
  thumbnail,
  icon,
  description,
  github,
  demo
}) => (
  <Flex align="center" justify="center">
    <Box className="flip-card">
      <Box className="flip-card_front">
        <Image src={thumbnail} alt={title} width={374} height={500} />
      </Box>

      <Box className="flip-card_back">
        <Box className="flip-card_back_inner">
          <Image src={icon} width={90} height={115} alt={title} />
          <Heading as="h3" size="lg" letterSpacing={'tighter'}>
            {title}
          </Heading>
          <p>{description}</p>
        </Box>
        <Box className="flip-card_back_inner_button">
          {github ? (
            <Link href={github} target="_blank">
              <i className="fa-brands fa-github"></i>
            </Link>
          ) : (
            <span></span>
          )}
          {demo ? (
            <Link href={demo} target="_blank">
              <i className="fa-solid fa-magnifying-glass fa-bounce"></i>
            </Link>
          ) : (
            <span></span>
          )}
        </Box>
      </Box>
    </Box>
  </Flex>
)

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 400
}

export const ArtGridItem = ({ title, thumbnail }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Flex align="center" justify="center">
      <Box className="art-card">
        <Box className={`art-card_front ${isOpen ? 'open' : ''}`}>
          <motion.div
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={transition}
            className="shade"
            onClick={() => setOpen(false)}
          />
          <motion.img
            src={thumbnail}
            alt={title}
            onClick={() => setOpen(!isOpen)}
            layout={true}
            transition={transition}
          />
        </Box>
        <Shadow style={{ backgroundImage: `url(${thumbnail})` }}></Shadow>
      </Box>
    </Flex>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
    ::selection {
      color: white;
      background: red;
    }

    .flip-card {
        position: relative;
        transform-style: preserve-3d;
        perspective: 1000px;
        cursor: pointer;
      }
      
      .flip-card_front,
      .flip-card_back {
        width: 100%;
        min-height: 300px;
        text-align: center;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: transform 0.7s ease-in-out;
        border-radius: 30px;
      }
      
      .flip-card_front {
        position: relative;
        height: 300px;
        overflow: hidden;
        transform: rotateY(0deg);
      }
      
      .flip-card_front > img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        object-position: 50% 50%;
      }
      
      .flip-card_back {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotateY(180deg);
        /* background: #333; */
        background-image: url("./images/works/uzui2.jpg");
        background-size: cover;
        background-position: center;
      }
      
      .flip-card_back::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #0a0a0a;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.3;
        border-radius: 30px;
      }
      
      .flip-card_back_inner {
        width: 100%;
        height: 222px;
        padding: 0 35px;
        position: absolute;
        top: 47%;
        transform: translateY(-50%) translateZ(60px) scale(0.94);
      }
      
      .flip-card_back_inner img {
        width: 90px;
        margin-bottom: 5px;
      }
      
      .flip-card_back_inner h3 {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: capitalize;
      }
      
      .flip-card_back_inner p {
        height: 60px;
        margin-bottom: 8px;
        border-bottom: #ffffff;
        color: #ffffff;
        font-size: 16px;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .flip-card_back_inner hr {
          opacity: 0.5;
          margin: 5px 0;
      }
      
      .tags {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .tags span {
        color: #ffffff;
        display: block;
        padding: 2px 5px;
      }
      
      .flip-card_back_inner_button {
        position: absolute;
        padding: 0 10px 10px 10px;
        bottom: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        z-index: 2;
      }
      .flip-card_back_inner_button a {
        position: relative;
        display: inline-block;
      }
      .flip-card_back_inner_button a:nth-of-type(1) {
        transform: scale(1);
        transition: 0.2s ease-in;
      }
      
      .flip-card_back_inner_button a:nth-of-type(1):hover {
        transform: scale(1.2);
      }
      
      .flip-card_back_inner_button i {
        color: #ffffff;
        font-size: 2rem;
      }
      
      .flip-card:hover .flip-card_front {
        transform: rotateY(-180deg);
      }
      
      .flip-card:hover .flip-card_back {
        transform: rotateY(0deg);
      }

      .art-card {
        position: relative;
        
      }

      

      .art-card_front {
        
        
        width: 100%;

        
        position: relative;
        z-index: 0;
        cursor: zoom-in;
      }

      .art-card_front.open {
        cursor: zoom-out;
        z-index: 99;
      }

      .art-card_front .shade {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        opacity: 0;
        background: rgba(0, 0, 0, 0.9);
      }

      .art-card_front.open .shade {
        pointer-events: auto;
        opacity: 1;
       
      }

      .art-card_front > img {

        


        display: inline-block;
        border-radius: 30px;
        object-fit: cover;
        object-position: 50% 50%;

        
      }

      .art-card_front.open img {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: auto;
        height: auto;
        max-width: 100%;
        margin: auto;
        
      }

      

    `}
  />
)

const Shadow = styled.div`
  border-radius: 8px;
  filter: blur(20px);
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: -55px;
  left: 13%;
  width: 75%;
  height: 95%;
  z-index: -1;
  transition: all 0.4s;
`
