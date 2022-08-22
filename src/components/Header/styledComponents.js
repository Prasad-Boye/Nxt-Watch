import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {AiOutlineClose} from 'react-icons/ai'

export const MainContainer = styled.div`
  display: flex;
  height: 90px;
  padding: 2% 5%;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#f9f9f9'};
  margin: 0px;
`
export const Img = styled.img`
  width: ${props => (props.logo ? '120px' : '35px')};
`

export const HeaderDetailsContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  width: 40px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  align-self: ${props => (props.close ? 'flex-end' : '')};
  font-weight: ${props => (props.close ? 'bold' : '')};
`

export const Button = styled.button`
  background-color: transparent;
  height: 30px;
  width: 80px;
  font-weight: 600;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
  border: 2px solid ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
`
export const HeaderXS = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
  min-width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: ${props =>
      props.theme === 'dark' ? '#313131' : '#f9f9f9'};
    display:flex:
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  &-content {
    background-color: ${props =>
      props.theme === 'dark' ? '#313131' : '#f9f9f9'};
    width: 100%;
  }
`

export const CloseModal = styled(AiOutlineClose)`
  align-self: flex-end;
  justify-self: flex-end;
  text-align: right;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
export const P = styled.p`
  font-weight: 700;
`
