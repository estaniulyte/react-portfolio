import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import { Photos } from '../data/PhotographyData';
import PhotoComponent from './PhotoComponent'

import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
`
const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(calc(8rem + 7vw), 1fr));
  grid-gap: calc(0.1rem + 2vw);

  @media (max-width: 1700px) {
    grid-template-columns: repeat(2, minmax(calc(8rem + 7vw), 1fr));
    grid-gap: calc(0);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(calc(8rem + 7vw), 1fr));
  }
`

// Framer-motion config
const container = {
  hidden: {opacity:0},
  show: {
    opacity:1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}

const BlogPage = () => {

  return (
    <MainContainer
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
        opacity:0, transition:{duration: 0.5}
      }}
    >
      <Container>
        <LogoComponent />
        <SocialIcons />
        <Center>
          <Grid>
            {
              Photos.map(blog => {
                return <PhotoComponent key={blog.id} blog={blog} />
              })
            }
          </Grid>
        </Center>
        <BigTitle text="PHOTOGRAPHY" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  )
}

export default BlogPage
