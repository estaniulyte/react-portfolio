import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import ContactPageParticles from '../subComponents/ContactPageParticles';
import BigTitle from '../subComponents/BigTitlte'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 4rem;
  width: 30vw;
  height: 40vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  @media (max-width: 900px) {
    width: 70vw;
    height: 35vh;
    padding: 2rem;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  @media (max-width: 900px) {
    font-size: calc(1.5em + 1vw);
  }

  ${Main}:hover &{
    &>*{
      fill:${props => props.theme.body};
    }
  }

  &>*:first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 1rem;

  @media (max-width: 900px) {
    font-size: calc(0.9em + 1vw);
  }

  ${Main}:hover &{
    color:${props => props.theme.body};

    a {
      color:${props => props.theme.body};
      
      &:hover{
        color: ${props => props.theme.text};
        background-color: ${props => props.theme.body};
        padding: 3px;
        cursor: pointer;
      }
    }
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,p {
    margin-left: 2rem;
  }

  a {
    color: ${props => props.theme.text};
  }
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        {/* <ParticleComponent theme='light' /> */}
        <ContactPageParticles />
        <Main>
          <Title>
            Say Hello
          </Title>
          <Description>
            If you have an offer or opportunity e-mail me at <NavLink target="_blank" to={{pathname:"mailto:e.staniulyte98@gmail.com"}}>e.staniulyte98@gmail.com</NavLink>
          </Description>
          <Description>
            <a href="https://drive.google.com/uc?export=download&id=1DO-kFeEkAE9VYF7vBqurF1csy_1wl-UV">Download CV</a>
          </Description>
        </Main>
        <BigTitle text="CONTACT" top="80%" right="30%" />
      </Box>
    </ThemeProvider>    
  )
}

export default MySkillsPage
