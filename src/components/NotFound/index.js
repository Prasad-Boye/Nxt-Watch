import AppContext from '../../context'
import Header from '../Header'
import Footer from '../Footer'
import NavItems from '../NavItems'

import {
  MainContainer,
  HeadElement,
  HomeContents,
  Navbar,
  HomeItemsContainer,
  NotFoundContainer,
  Img,
  P,
  H1,
} from './styledComponent'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isdark} = value
      const theme = isdark ? 'dark' : 'light'
      const image = isdark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      console.log('hi')
      return (
        <MainContainer theme={theme} data-testid="home">
          <HeadElement>
            <Header theme={theme} />
          </HeadElement>
          <HomeContents>
            <Navbar theme={theme}>
              <NavItems />
              <Footer />
            </Navbar>
            <HomeItemsContainer main>
              <NotFoundContainer theme={theme}>
                <Img src={image} alt="not found" />
                <H1 theme={theme}>Page Not Found</H1>
                <P>we are sorry, the page you requested could not be found.</P>
              </NotFoundContainer>
            </HomeItemsContainer>
          </HomeContents>
        </MainContainer>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
