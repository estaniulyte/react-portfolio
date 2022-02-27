import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';
// import { motion } from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
// import { Work } from "../data/WorkData";
// import Card from '../subComponents/Card';
// import { YinYang } from './AllSvgs';
import BigTitlte from '../subComponents/BigTitlte';
import unity from '../assets/Images/unity.jpg'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height:100vh;
  position: relative;
  display: flex;
  align-items: center;
  font-family: Inter, Roboto;

  @media (max-width: 600px) {
    height:140vh;
  }
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 5rem;
  box-sizing: border-box;
  width: 53vw;
  height: 74vh;
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
    height: 110vh;
    top: 6rem;
    left: calc(1.7rem + 5vw);
  }

  .inline {
    font-family: Inter, Roboto;
    display: flex;
    flex-direction: row;
    padding: 5px;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      padding-right: 20px;

      @media (max-width: 600px) {
        padding-right: 5px;
        width: 45px;
        height: 45px;
      }
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    padding-left: 0;
    margin: 5px;
    margin-left: 0;
  }

  .title {
    font-size: 1.7rem;
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }

  .title2 {
    font-size: 1.2rem;
    text-transform: uppercase;
    background-color: #d1eaff;
    color:black;
    text-align: center;
    margin: 7px 0;
    padding: 7px 20px;
    box-sizing: border-box;
    width: 400px;

    @media (max-width: 600px) {
      font-size: 0.9rem;
      width: 200px;
    }
  }

  .sub-title {
    color: #d0d0d0;
    font-size: 1.1rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .sub-title2 {
    color: #d0d0d0;
    font-size: 0.9rem;

    @media (max-width: 600px) {
      font-size: 0.7rem;
    }
  }

  .list{
    margin-left: 50px;
    font-size: 1.1rem;

    li {
      padding-top: 5px;
    }

    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }

  .sub {

  }
`
// const Main = styled(motion.ul)`
//   position: fixed;
//   top: 12rem;
//   left: calc(10rem + 15vw);
//   height: 40vh;
//   display: flex;
//   color: white;
// `
// const Rotate = styled.span`
//   display: block;
//   position: fixed;
//   right: 1rem;
//   bottom: 1rem;
//   width: 80px;
//   height: 80px;
//   z-index: 1;
// `

// Framer-motion Configuration
// const container = {
//   hidden: {opacity: 0},
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       duration: 0.5,
//     }
//   }
// }

const WorkPage = () => {
  // const ref = useRef(null);
  // const yinyang = useRef(null);

  // useEffect(() => {
  //   let element = ref.current;

  //   const rotate = () => {
  //     element.style.transform = `translateX(${-window.pageYOffset}px)`
  //     return (yinyang.current.style.transform =
  //       'rotate(' + -window.pageYOffset + 'deg)')
  //   }
    
  //   window.addEventListener('scroll', rotate)
  //   return () => {
  //     window.removeEventListener('scroll', rotate);
  //   }
  // }, [])

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        {/* <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
          {
            Work.map( d => 
              <Card key={d.id} data={d} />
            )
          }
        </Main> */}
        {/* <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate> */}
        <Main>
          <div className="inline">
            <img src={unity} alt="unity-logo" />
            <div className="column">
              <p className="title">Unity Technologies</p>
              <p className="sub-title">3yrs 5mos</p>
            </div>
          </div>
          <div className="sub">
            <div className="inline">
              <div className="column">
                <h5 className="title2">Software Test Engineer</h5>
                <p className="sub-title2">Aug 2019 - Present (2yrs 7mos)</p>
              </div>
            </div>
            <div>
              <ul className="list">
                  <li>Unity features testing on multiple platforms (Win, Mac, iOS, Android, ChromeOS, Oculus, WebGL)</li>
                  <li>Particiation in feature design activities related to function and non-functional aspects</li>
                  <li>Testing that includes black box testing, automation running, UI/UX evaluation</li>
                  <li>Reportation of issues found back to development and project teams</li>
                  <li>Fulfillment of testing documents, creation of new documentation templates</li>
                  <li>Tools writing (Javascript, VueJS, Vuex, Vuetify, Axios, MySQL, NodeJS)</li>
              </ul>
            </div>
            <div className="inline">
              <div className="column">
                <h5 className="title2">Customer QA</h5>
                <p className="sub-title2">Oct 2018 - Aug 2019 (10 mos)</p>
              </div>
            </div>
            <div>
              <ul className="list">
                <li>Comunication with customers to reproduce their bug reports in-house</li>
                <li>Provide detailed and formed bug reports to developers</li>
                <li>Collaboration with ohter testers and developers in an agile environment</li>
                <li>Bugs verification</li>
              </ul>
            </div>
          </div>
        </Main>
        <BigTitlte text="WORK" top='10%' right="10%" />
      </Box>
    </ThemeProvider>
  )
}

export default WorkPage
