import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, YouTube } from '../components/AllSvgs'
import { ReactComponent as LindedIcon } from '../assets/svg/linked-in.svg'
import { DarkTheme } from '../components/Themes'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  &>*:not(:last-child){
    margin: 0.5rem 0;
  }

  @media (max-width: 900px) {
    left: 0.5rem;

    &>*:not(:last-child){
      margin: 0.3rem 0;
    }
  }
`

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
`

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1}}
      >
        <NavLink style={{color:'inherit'}}  target="_blank" to={{pathname:"https://github.com/estaniulyte"}}>
          <Github width={26} height={26} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.2}}
      >
        <NavLink style={{color:'inherit'}}  target="_blank" to={{pathname:"https://www.linkedin.com/in/evelina-staniulyte/"}}>
          <LindedIcon width={24} height={24} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
        </NavLink>
      </motion.div>
      <Line color={props.theme}
        initial={
          {
            height:0
          }
        }
        animate={{
          height: '8rem'
        }}
        transition={{
          type:'spring', duration:1, delay:0.8
        }}
      />
    </Icons>
  )
}

export default SocialIcons
