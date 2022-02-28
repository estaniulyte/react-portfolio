import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
  width: calc(2rem + 13vw);
  text-decoration: none;
  height: 26rem;
  padding: 1rem;
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
  // cursor: pointer;
  cursor: default;
  display: flex;
  flex-direction: column;
  z-index:5;

  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  @media (max-width: 2000px) {
    width: calc(4rem + 13vw);
    height: 24rem;
  }

  @media (max-width: 1700px) {
    width: calc(10rem + 16vw);
    height: 29rem;
  }

  @media (max-width: 900px) {
    width: calc(15rem + 13vw);
    height: 25rem;
  }

  @media (max-width: 600px) {
    width: calc(13rem + 13vw);
    height: 20rem;
  }
`

const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 100%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover &{
    border:1px solid ${props => props.theme.body};
  }
`

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden:{
    scale: 0
  },
  show:{
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const BlogComponent = (props) => {
  const {imgSrc, link} = props.blog;
  return (
    <Container
      variants={Item}
    >
      <Box>
        <Image img={imgSrc} />
      </Box>
    </Container>
  )
}

export default BlogComponent
