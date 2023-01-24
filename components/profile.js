import styled from '@emotion/styled'
import { Box, Image, Link } from '@chakra-ui/react'
import { useState } from 'react'

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  & li.icon-one,
  & li.icon-two,
  & li.icon-three,
  & li.icon-four,
  & li.icon-five,
  & li.icon-six,
  & li.icon-seven,
  & li.icon-eight {
    position: absolute;
    left: 0;
    list-style: none;
    transform-origin: 100px;
    transform: rotate(0deg) translateX(80px);
  }
  & li.icon-one {
    transition: 0.5s calc(0.1s * 0);
  }
  & li.icon-two {
    transition: 0.5s calc(0.1s * 1);
  }
  & li.icon-three {
    transition: 0.5s calc(0.1s * 2);
  }
  & li.icon-four {
    transition: 0.5s calc(0.1s * 3);
  }
  & li.icon-five {
    transition: 0.5s calc(0.1s * 4);
  }
  & li.icon-six {
    transition: 0.5s calc(0.1s * 5);
  }
  & li.icon-seven {
    transition: 0.5s calc(0.1s * 6);
  }
  & li.icon-eight {
    transition: 0.5s calc(0.1s * 7);
  }

  &.active li.icon-one {
    transform: rotate(calc(360deg / 8 * 0));
  }
  &.active li.icon-two {
    transform: rotate(calc(360deg / 8 * 1));
  }
  &.active li.icon-three {
    transform: rotate(calc(360deg / 8 * 2));
  }
  &.active li.icon-four {
    transform: rotate(calc(360deg / 8 * 3));
  }
  &.active li.icon-five {
    transform: rotate(calc(360deg / 8 * 4));
  }
  &.active li.icon-six {
    transform: rotate(calc(360deg / 8 * 5));
  }
  &.active li.icon-seven {
    transform: rotate(calc(360deg / 8 * 6));
  }
  &.active li.icon-eight {
    transform: rotate(calc(360deg / 8 * 7));
  }

  & li.icon-one a,
  & li.icon-two a,
  & li.icon-three a,
  & li.icon-four a,
  & li.icon-five a,
  & li.icon-six a,
  & li.icon-seven a,
  & li.icon-eight a {
    text-decoration: none;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    color: #111;
    transform: scale(1);
    transition: all 0.5s;
  }

  & li.icon-one a i {
    transform: rotate(calc(360deg / -8 * 0));
  }
  & li.icon-two a i {
    transform: rotate(calc(360deg / -8 * 1));
  }
  & li.icon-three a i {
    transform: rotate(calc(360deg / -8 * 2));
  }
  & li.icon-four a i {
    transform: rotate(calc(360deg / -8 * 3));
  }
  & li.icon-five a i {
    transform: rotate(calc(360deg / -8 * 4));
  }
  & li.icon-six a i {
    transform: rotate(calc(360deg / -8 * 5));
  }
  & li.icon-seven a i {
    transform: rotate(calc(360deg / -8 * 6));
  }
  & li.icon-eight a i {
    transform: rotate(calc(360deg / -8 * 7));
  }

  & li a:hover {
    color: #ff1252;
    transform: scale(1.2);
  }

  .toggle {
    position: absolute;
    width: 100px;
    height: 100px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 98;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    border: 2px solid #fff;
  }

  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 25%;
    left: 25%;
    background: linear-gradient(
      45deg,
      #ff0000,
      #00f0f0,
      #00ff00,
      #0000ff,
      #ff0000,
      #00f0f0,
      #00ff00,
      #0000ff,
      #f00f0f
    );
    width: 50%;
    height: 50%;
    transform: scale(0.8);
    z-index: 0;
    background-size: 500%;
    animation: animate 15s infinite;
    filter: blur(15px);
  }

  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 300% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  .toggle img {
    width: 100%;
    object-fit: cover;
  }
  .toggle i {
    opacity: 0;
    position: absolute;
    color: rgb(255, 255, 255);
    font-size: 2.5em;
    transition: opacity 0.3s ease-in-out;
  }

  .toggle:hover i {
    opacity: 1;
    transition: opacity 0.3s, transform 1.25s;
  }

  &.active .toggle i {
    opacity: 1;
    animation: rotate 2s;
    animation-play-state: running;
    animation-fill-mode: both;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(315deg);
    }
  }
`

//TODO add component for li icon + children for i elt + dynamic class
const Profile = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      className={isActive && 'active'}
      onClick={() => setIsActive(!isActive)}
    >
      <Box className="toggle">
        <i className="fa-solid fa-plus"></i>
        <Image src="/images/rardooba.jpg" alt="rardooba profile" />
      </Box>
      <li className="icon-one">
        <Link href="https://twitter.com/rardooba" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </Link>
      </li>
      <li className="icon-two">
        <Link href="https://www.instagram.com/rardooba/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </li>
      <li className="icon-three">
        <Link
          href="https://www.linkedin.com/in/maissoum-aboudrare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
      </li>
      <li className="icon-four">
        <Link href="https://www.behance.net/art-to-code" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-behance"></i>
        </Link>
      </li>
      <li className="icon-five">
        <Link href="https://github.com/rardooba" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </Link>
      </li>
      <li className="icon-six">
        <Link href="https://dribbble.com/art-to-code" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-dribbble"></i>
        </Link>
      </li>
      <li className="icon-seven">
        <Link
          href="https://www.youtube.com/channel/UC3xjOUiYkEzZ2LPJvBIJOiw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-youtube"></i>
        </Link>
      </li>
      <li className="icon-eight">
        <Link href="https://medium.com/@rardooba" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-medium"></i>
        </Link>
      </li>
    </Container>
  )
}

export default Profile
