import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  position: fixed;
  left: 2rem;
  top: 2rem;
  font-size: 2rem;
  z-index: 3;
`
const LogoComponent = (props) => {
  return (
    <NavLink to="/">
      <Logo color={props.theme}>
        ES
      </Logo>
    </NavLink>
  )
}

export default LogoComponent
