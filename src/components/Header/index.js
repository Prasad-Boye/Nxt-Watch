import {useState} from 'react'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
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
  CloseModal,
  P,
} from './styledComponents'
import AppContext from '../../context'

const Header = props => {
  const {history} = props
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
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
            <Link to="/">
              <Img src={logo} alt="website logo" logo />
            </Link>
            <HeaderDetailsContainer>
              <ThemeButton type="button" onClick={changeBg} theme={theme}>
                {isdark ? <FiSun /> : <FaMoon />}
              </ThemeButton>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Button
                type="button"
                theme={theme}
                onClick={() => setOpen(o => !o)}
              >
                Logout
              </Button>
            </HeaderDetailsContainer>
            <HeaderXS>
              <ThemeButton
                type="button"
                onClick={changeBg}
                theme={theme}
                data-testid="theme"
              >
                {isdark ? <FiSun /> : <FaMoon />}
              </ThemeButton>
              <StyledPopup
                trigger={
                  <ThemeButton type="button" onClick={changeBg} theme={theme}>
                    <GiHamburgerMenu />
                  </ThemeButton>
                }
                modal
                lockScroll
                position="center center"
                closeOnDocumentClick
                theme={theme}
              >
                {close => (
                  <Menu>
                    <ThemeButton
                      type="button"
                      onClick={close}
                      data-testid="close"
                    >
                      <CloseModal />
                    </ThemeButton>
                    <NavItems />
                  </Menu>
                )}
              </StyledPopup>
              <ThemeButton
                type="button"
                onClick={() => setOpen(o => !o)}
                theme={theme}
              >
                <FiLogOut />
              </ThemeButton>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                  <div className="content">
                    <P>Are you sure, you want to logout?</P>
                    <button
                      className="button"
                      type="button"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>

                    <button type="button" onClick={logoutUser}>
                      Confirm
                    </button>
                  </div>
                </div>
              </Popup>
            </HeaderXS>
          </MainContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
