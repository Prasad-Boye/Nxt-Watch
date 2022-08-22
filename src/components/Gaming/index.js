import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import AppContext from '../../context'
import Header from '../Header'
import Footer from '../Footer'
import NavItems from '../NavItems'
import FailureView from '../FailureView'

import {
  MainContainer,
  HeadElement,
  HomeContents,
  SubHeader,
  Logo,
  Navbar,
  HomeItemsContainer,
  LoaderContainer,
  Ul,
  Li,
  Thumbnail,
  DetailsSection,
  P,
  H1,
  Button,
} from './styledComponents'
import {FailureContainer} from '../Trending/styledComponents'

const apiStatusCode = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {apiStatus: apiStatusCode.initial, gamingVideos: ''}

  componentDidMount() {
    this.fetchData()
  }

  componentWillUnmount() {}

  fetchData = async () => {
    this.setState({apiStatus: apiStatusCode.loading})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideo =>
        this.getUpdatedData(eachVideo),
      )
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusCode.success,
      })
    } else {
      this.setState({apiStatus: apiStatusCode.failure})
    }
  }

  getUpdatedData = videoDetails => {
    const videoInfo = {
      id: videoDetails.id,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      viewCount: videoDetails.view_count,
    }
    return videoInfo
  }

  loaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  getFailureView = () => (
    <FailureContainer>
      <FailureView />
      <Button retry onClick={this.fetchData}>
        Retry
      </Button>
    </FailureContainer>
  )

  gamingView = () => (
    <AppContext.Consumer>
      {value => {
        const {isdark} = value
        const theme = isdark ? 'dark' : 'light'
        const {gamingVideos} = this.state
        console.log(gamingVideos)

        return (
          <Ul theme={theme}>
            {gamingVideos.map(eachVideo => {
              const {id, thumbnailUrl, viewCount} = eachVideo
              return (
                <Li key={id}>
                  <Thumbnail src={thumbnailUrl} alt="profile" />
                  <DetailsSection theme={theme}>
                    <P>{viewCount} Watching Worldwide</P>
                  </DetailsSection>
                </Li>
              )
            })}
          </Ul>
        )
      }}
    </AppContext.Consumer>
  )

  getGamingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCode.loading:
        return this.loaderView()
      case apiStatusCode.success:
        return this.gamingView()
      case apiStatusCode.failure:
        return this.getFailureView()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isdark} = value
          const theme = isdark ? 'dark' : 'light'

          return (
            <MainContainer theme={theme} data-testid="gaming">
              <HeadElement>
                <Header theme={theme} />
              </HeadElement>
              <HomeContents data-testid="gaming" theme={theme}>
                <Navbar theme={theme}>
                  <NavItems />
                  <Footer />
                </Navbar>
                <HomeItemsContainer>
                  <SubHeader theme={theme} data-testid="banner">
                    <Logo theme={theme}>
                      <SiYoutubegaming />
                    </Logo>
                    <H1>Gaming</H1>
                  </SubHeader>
                  {this.getGamingView()}
                </HomeItemsContainer>
              </HomeContents>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default GamingRoute
