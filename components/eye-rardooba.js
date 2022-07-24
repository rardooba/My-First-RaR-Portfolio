import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Box, Spinner } from '@chakra-ui/react'

const VoxelDog = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const container = document.body
    const eyeRetina = document.querySelector('.eyes_retina')
    const eyePupil = document.querySelector('.eyes_pupil')
    const eyeReflexion = document.querySelector('.eyes_reflection-right')

    const rardooba = document.querySelector('.rar-logo')

    rardooba && setLoading(false)

    const moveEye = e => {
      const x = `${(e.clientX * 100) / window.innerWidth}%`
      const y = `${(e.clientY * 100) / window.innerHeight}%`
      const t = `${(e.clientX * 50) / window.innerWidth}%`
      const u = `${(e.clientY * 50) / window.innerHeight}%`

      eyeRetina.style.top = y
      eyeRetina.style.left = x
      eyeRetina.style.transform = `translate(-${x}, -${y})`

      eyePupil.style.top = y
      eyePupil.style.left = x
      eyePupil.style.transform = `translate(-${x}, -${y})`

      eyeReflexion.style.top = u
      eyeReflexion.style.left = t
      eyeReflexion.style.transform = `translate(-${t}, -${u})`
    }
    container.addEventListener('mousemove', moveEye)

    return () => container.removeEventListener('mousemove', moveEye)
  }, [])

  return (
    <Box
      m="auto"
      w={[400, 600]}
      h={[500, 500]}
      position="relative"
      display={{ base: 'none', md: 'block' }}
    >
      <LogoEyeStyle>
        <Box className="rar-logo">
          <Box className="rar-eyes">
            <Box className="eyes_light"></Box>
            <Box className="eyes_shadow"></Box>
            <Box className="eyes_globus">
              <Box className="eyes_pupil">
                <Box className="eyes_retina"></Box>
              </Box>
              <Box className="eyes_reflection-right"></Box>
            </Box>
          </Box>
        </Box>

        <Box className="moustaches">
          <Box className="moustache1"></Box>
          <Box className="moustache2"></Box>
          <Box className="moustache3"></Box>
          <Box className="moustache4"></Box>
        </Box>
      </LogoEyeStyle>

      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  )
}

const LogoEyeStyle = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
  padding: 20px 0;

  .rar-logo {
    height: 400px;
    position: relative;
    background: #f12431;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  svg {
    background: #f12431;
    position: absolute;
  }
  #scales {
    fill: #f12431;
  }
  #inner {
    stroke: #ca202b;
    stroke-width: 2.5;
  }
  #outer {
    stroke: #d93943;
    stroke-width: 0.7;
  }

  .rar-eyes {
    /*repère de base pour oeil*/
    position: relative;
    width: 400px;
    height: 320px;
    margin-top: 25px;
  }

  .eyes_light {
    position: absolute;
    z-index: 30;
    width: 300px;
    height: 300px;
    left: 50px;
    background: rgba(161, 30, 86, 0.6);
    border-radius: 150px;
  }

  .eyes_shadow {
    position: absolute;
    z-index: 30;
    width: 307px;
    height: 300px;
    top: 13px;
    left: 47px;
    background: rgb(3 3 3 / 40%);
    border-radius: 150px;
  }

  .global-eye {
    position: absolute;
    z-index: 35;
    width: 300px;
    height: 300px;
    top: 5px;
    left: 50px;
    background: #fff;
    border-radius: 150px;
    overflow: hidden;
  }

  .eyes_globus {
    position: absolute;
    z-index: 40;
    width: 300px;
    height: 300px;
    top: 5px;
    left: 50px;
    background: #fff;
    border-radius: 150px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  .eyes_pupil {
    position: absolute;
    z-index: 100;
    width: 250px;
    height: 250px;
    top: 30px;
    left: 75px;
    background: #26b0c6;
    border-radius: 125px;
    overflow: hidden;
  }

  .eyes_retina {
    position: absolute;
    z-index: 110;
    width: 150px;
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #1a1313;
    border-radius: 75px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  .eyes_reflection-right {
    position: absolute;
    z-index: 120;
    width: 100px;
    height: 100px;
    top: 80px;
    left: 240px;
    background: #fff;
    border-radius: 50px;
  }

  .moustaches {
    position: absolute;
    bottom: -36px;
    width: 345px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .moustache1 {
    position: absolute;
    z-index: 80;
    width: 75px;
    height: 75px;
    border-radius: 0px 0px 50px 25px;
    background: #1a1313;
  }
  .moustache2 {
    position: absolute;
    z-index: 85;
    left: 65px;
    width: 75px;
    height: 75px;
    border-radius: 15px 0px 55px 35px;
    background: #1a1313;
  }
  .moustache3 {
    position: absolute;
    z-index: 85;
    right: 65px;
    width: 75px;
    height: 75px;
    background: #1a1313;
    border-radius: 0px 0px 35px 55px;
  }
  .moustache4 {
    position: absolute;
    right: 0;
    z-index: 80;
    width: 75px;
    height: 75px;
    border-radius: 0px 15px 25px 50px;
    background: #1a1313;
  }
`

export default VoxelDog
