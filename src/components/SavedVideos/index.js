import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import Footer from '../Footer'
import NavItems from '../NavItems'
import AppContext from '../../context'
import {
  MainContainer,
  HeadElement,
  HomeContents,
  Navbar,
  HomeItemsContainer,
  Thumbnail,
  DetailsSection,
  Lim,
  Li,
  Div,
  UlTime,
  H1,
  H2,
  P,
  Ul,
  NoVideos,
  Img,
  SubHeader,
  Logo,
} from './styledComponents'

const SavedVideos = props => (
  <AppContext.Consumer>
    {value => {
      const {isdark, savedVideos} = value
      const theme = isdark ? 'dark' : 'light'

      const jwtToken = Cookies.get('jwt_token')
      if (jwtToken === undefined) {
        return <Redirect to="/login" />
      }

      const savedVideosView = () => (
        <Ul theme={theme}>
          {savedVideos.map(eachVideo => {
            const {
              id,
              thumbnailUrl,
              title,
              viewCount,
              timeValue,
              name,
            } = eachVideo

            const getVideo = () => {
              const {history} = props
              console.log(history)
              history.push(`/videos/${id}`)
            }

            return (
              <Li key={id} onClick={getVideo}>
                <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                <Div>
                  <H1>{title}</H1>
                  <P theme={theme}>{name}</P>
                  <DetailsSection theme={theme}>
                    <P>{viewCount}</P>
                    <UlTime>
                      <Lim>
                        <P>{timeValue}</P>
                      </Lim>
                    </UlTime>
                  </DetailsSection>
                </Div>
              </Li>
            )
          })}
        </Ul>
      )

      const noVideos = () => (
        <NoVideos>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <H2 noSave>No saved videos found</H2>
          <P>You can save your videos while watching them</P>
        </NoVideos>
      )

      const getSavedVideos = () => {
        const view = savedVideos.length > 0 ? savedVideosView() : noVideos()
        return view
      }

      return (
        <MainContainer theme={theme}>
          <HeadElement>
            <Header theme={theme} />
          </HeadElement>
          <HomeContents data-testid="savedVideos" theme={theme}>
            <Navbar theme={theme}>
              <NavItems />
              <Footer />
            </Navbar>
            <HomeItemsContainer theme={theme}>
              <SubHeader theme={theme} data-testid="banner">
                <Logo theme={theme}>
                  <MdPlaylistAdd />
                </Logo>
                <H2>Saved Videos</H2>
              </SubHeader>
              {getSavedVideos()}
            </HomeItemsContainer>
          </HomeContents>
        </MainContainer>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(SavedVideos)
