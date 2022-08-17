import {withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import Cookies from 'js-cookie'
import NavItems from '../NavItems'

import {
  MainContainer,
  Img,
  HeaderDetailsContainer,
  ThemeButton,
  Button,
  HeaderXS,
  StyledPopup,
  Menu,
} from './styledComponents'
import AppContext from '../../context'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: '#000',
  },
}

const Header = props => {
  const {history} = props
  return (
    <AppContext.Consumer>
      {value => {
        const {isdark, changeTheme} = value
        const theme = isdark ? 'dark' : 'light'
        const logo =
          theme === 'dark'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const logoutUser = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const changeBg = () => changeTheme()

        return (
          <MainContainer theme={theme}>
            <Img src={logo} alt="website logo" logo />
            <HeaderDetailsContainer>
              <ThemeButton type="button" onClick={changeBg} theme={theme}>
                {isdark ? <FiSun /> : <FaMoon />}
              </ThemeButton>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Button type="button" theme={theme} onClick={logoutUser}>
                Logout
              </Button>
            </HeaderDetailsContainer>
            <HeaderXS>
              <ThemeButton type="button" onClick={changeBg} theme={theme}>
                {isdark ? <FiSun /> : <FaMoon />}
              </ThemeButton>
              <StyledPopup
                trigger={
                  <ThemeButton type="button" onClick={changeBg} theme={theme}>
                    <GiHamburgerMenu />
                  </ThemeButton>
                }
                modal
                position="center center"
                closeOnDocumentClick
                style={customStyles}
              >
                {close => (
                  <Menu>
                    <ThemeButton type="button" onClick={close}>
                      <AiOutlineClose />
                    </ThemeButton>
                    <NavItems />
                  </Menu>
                )}
              </StyledPopup>
              <ThemeButton type="button" onClick={changeBg} theme={theme}>
                <FiLogOut onClick={logoutUser} />
              </ThemeButton>
            </HeaderXS>
          </MainContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
