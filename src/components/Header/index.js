import {withRouter} from 'react-router-dom'
import {HiLightBulb} from 'react-icons/hi'
import {GiNightSleep, GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
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
import AppContext from '../../context/AppContext'

const Header = props => {
  const {history} = props
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const logo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const logoutUser = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const changeBg = () => changeTheme()

        return (
          <MainContainer isDark={isDark}>
            <Img src={logo} alt="website logo" logo />
            <HeaderDetailsContainer>
              <ThemeButton type="button" onClick={changeBg} isDark={isDark}>
                {isDark ? <GiNightSleep /> : <HiLightBulb />}
              </ThemeButton>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Button type="button" isDark={isDark} onClick={logoutUser}>
                Logout
              </Button>
            </HeaderDetailsContainer>
            <HeaderXS>
              <ThemeButton type="button" onClick={changeBg} isDark={isDark}>
                {isDark ? <GiNightSleep /> : <HiLightBulb />}
              </ThemeButton>
              <StyledPopup
                trigger={
                  <ThemeButton>
                    <GiHamburgerMenu />
                  </ThemeButton>
                }
                modal
                position="bottom left"
              >
                {close => (
                  <Menu>
                    <ThemeButton close type="button" onClick={close}>
                      <AiOutlineClose />
                    </ThemeButton>
                  </Menu>
                )}
              </StyledPopup>
            </HeaderXS>
          </MainContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
