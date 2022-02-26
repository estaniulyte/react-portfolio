import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/dev-female.png'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
  position: absolute;
  top: 20%;
  right: 9%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
      width: 100%;
      height: auto;
      transform: rotate(-8deg);
  }
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 5rem;
  box-sizing: border-box;
  width: 44vw;
  height: 75vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: calc(1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(6rem + 5vw);
  top: 10rem;
  font-family: Inter, Roboto;

  @media (max-width: 600px) {
    font-size: calc(3.6vw);
    padding: 1rem;
    width: 80vw;
    height: 85vh;
    top: 6rem;
    left: calc(1.7rem + 5vw);
  }

  .box {
    padding: 5px 8px;
    margin: 4px;
    padding: 12px;
    margin-right: 8px;
    font-size: calc(0.8vw);
    cursor: default;

    @media (max-width: 600px) {
      padding: 1px 2px;
      font-size: calc(3vw);
      margin-right: 1px;
    }
  }

  .color1 {
    background-color: #a32929;

    &:hover {
      transform: rotate(5deg);
    }
  }

  .color2 {
    background-color: #a34a29;

    &:hover {
      transform: rotate(-8deg);
    }
  }

  .color3 {
    background-color: #a36a29;

    &:hover {
      transform: rotate(-3deg);
    }
  }

  .color4 {
    background-color: #a38a29;

    &:hover {
      transform: rotate(9deg);
    }
  }

  .color5 {
    background-color: #98a329;

    &:hover {
      transform: rotate(-4deg);
    }
  }

  .color6 {
    background-color: #77a329;

    &:hover {
      transform: rotate(14deg);
    }
  }

  .color7 {
    background-color: #55a329;

    &:hover {
      transform: rotate(-10deg);
    }
  }

  .color8 {
    background-color: #34a329;

    &:hover {
      transform: rotate(-3deg);
    }
  }

  .color9 {
    background-color: #29a33f;

    &:hover {
      transform: rotate(-12deg);
    }
  }

  .color10 {
    background-color: #29a360;

    &:hover {
      transform: rotate(-5deg);
    }
  }

  .color11 {
    background-color: #29a382;

    &:hover {
      transform: rotate(-7deg);
    }
  }

  .color12 {
    background-color: #29a3a3;

    &:hover {
      transform: rotate(-4deg);
    }
  }

  .color13 {
    background-color: #2982a3;

    &:hover {
      transform: rotate(10deg);
    }
  }

  .color14 {
    background-color: #2960a3;

    &:hover {
      transform: rotate(-7deg);
    }
  }

  .color15 {
    background-color: #293fa3;

    &:hover {
      transform: rotate(11deg);
    }
  }

  .color16 {
    background-color: #3429a3;

    &:hover {
      transform: rotate(-8deg);
    }
  }

  .color17 {
    background-color: #5529a3;

    &:hover {
      transform: rotate(9deg);
    }
  }

  .color18 {
    background-color: #7729a3;

    &:hover {
      transform: rotate(-8deg);
    }
  }

  .color19 {
    background-color: #9829a3;

    &:hover {
      transform: rotate(-13deg);
    }
  }

  .inline-box{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin:0;
    margin-top: 7px;
    padding:0;
    text-align: left;
    align-items: left;
    flex-wrap: wrap;
  }
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <ParticleComponent theme='dark' />
        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
          <p>Hello! I'm Evelina Staniulyte, a experienced <b>Software Test engineer</b> with <b>UI & UX</b> expertise and <b>Front End development</b> skills.</p>
          <br />
          <p>I mainly work with the Unity engine since I've been working for Unity Technologies over 3 years.</p>
          <br/> 
          <p>I finished bachelor studies of Multimedia and Computer design, later UI/UX courses, Black Box testing foundations and the latest is Front-End academy. The learning path doesn't end here, because a part of leisure time I spend on improving coding skills.</p>
          <br/>
          Things I have experience with: 
          <br/>
          <div className="inline-box">
            <div className="color1 box">JavaScript</div>
            <div className="color2 box">React</div>
            <div className="color4 box">VueJS</div>
            <div className="color5 box">Html</div>
            <div className="color6 box">CSS</div>
            <div className="color7 box">SASS</div>
            <div className="color8 box">NodeJS</div>
            <div className="color9 box">GIT</div>
          </div>
          <div className="inline-box">
            <div className="color10 box">Unity Engine</div>
            <div className="color11 box">C#</div>
            <div className="color12 box">TestRail</div>
            <div className="color13 box">JIRA</div>
            <div className="color14 box">Confluence</div>
            <div className="color15 box">SQL</div>
            <div className="color16 box">FogBugz</div>
          </div>
          <div className="inline-box">
            <div className="color17 box">Figma</div>
            <div className="color18 box">Balsamiq</div>
            <div className="color19 box">Bitbucket</div>
          </div>
          <br/>
        <p>Outside of work, I enjoy practising dances like Salsa, Rueda, and other Latino styles. Also, I spend much time taking pictures and even more on retouching them later.</p>
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>    
  )
}

export default AboutPage
