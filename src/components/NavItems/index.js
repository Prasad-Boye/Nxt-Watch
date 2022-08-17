import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import AppContext from '../../context'
import {MainContainer, NavElement, NavIcon, P} from './styledComponents'

const NavItems = () => (
  <AppContext.Consumer>
    {value => {
      const {isdark} = value
      const theme = isdark ? 'dark' : 'light'
      return (
        <MainContainer theme={theme}>
          <NavElement to="/" activeClassName="active" theme={theme}>
            <NavIcon>
              <AiFillHome />
            </NavIcon>
            <P theme={theme}>Home</P>
          </NavElement>
          <NavElement to="/trending" activeClassName="active" theme={theme}>
            <NavIcon>
              <HiFire />
            </NavIcon>
            <P theme={theme}>Trending</P>
          </NavElement>
          <NavElement to="/games" activeClassName="active" theme={theme}>
            <NavIcon>
              <SiYoutubegaming />
            </NavIcon>
            <P theme={theme}>Games</P>
          </NavElement>
          <NavElement to="/saved-videos" activeClassName="active" theme={theme}>
            <NavIcon>
              <MdPlaylistAdd />
            </NavIcon>
            <P theme={theme}>Saved Videos</P>
          </NavElement>
        </MainContainer>
      )
    }}
  </AppContext.Consumer>
)

export default NavItems
