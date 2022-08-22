import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const MainContainer = styled.ul`
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#f9f9f9'};
  color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
  margin: 0px;
  padding-top: 20px;
  width: 100%;
  list-style: none;
  padding-left: 0px;
`
export const NavElement = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 20px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#606060')};
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#f9f9f9'};
  &.${props => props.activeClassName} {
    color: #ff0000;
    background-color: ${props =>
      props.theme === 'dark' ? '#ffffff20' : '#e2e8f0'};
    font-weight: 700;
  }
  font-weight: ${props => (props.isActive ? 'bold' : '500')};
  margin: 0px;
  margin-bottom: 10px;
  height: 40px;
`
export const NavIcon = styled.li`
  font-size: 20px;
  margin: 0px;
  margin-right: 20px;
`
export const P = styled.p`
  margin: 0px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#606060')};
`
