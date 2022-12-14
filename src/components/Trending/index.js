import {Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import AppContext from '../../context'
import Header from '../Header'
import Footer from '../Footer'
import NavItems from '../NavItems'
import FailureView from '../FailureView'

import {
  MainContainer,
  HeadElement,
  HomeContents,
  Navbar,
  HomeItemsContainer,
  LoaderContainer,
  Ul,
  Li,
  Thumbnail,
  Div,
  DetailsSection,
  UlTime,
  Lim,
  SubHeader,
  Logo,
  P,
  H1,
  FailureContainer,
  Button,
} from './styledComponents'

const apiStatusCode = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {apiStatus: apiStatusCode.initial, trendingVideos: []}

  componentDidMount() {
    this.getData()
  }

  componentWillUnmount() {}

  getData = async () => {
    this.setState({apiStatus: apiStatusCode.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      console.log(updatedData, data)
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusCode.success,
      })
    } else {
      this.setState({apiStatus: apiStatusCode.failure})
    }
  }

  getUpdatedData = videoDetails => {
    const updatedChannel = {
      name: videoDetails.channel.name,
      profileImageUrl: videoDetails.channel.profile_image_url,
    }
    const videoInfo = {
      channel: updatedChannel,
      id: videoDetails.id,
      publishedAt: videoDetails.published_at,
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
      <Button retry onClick={this.getData}>
        Retry
      </Button>
    </FailureContainer>
  )

  trendingView = () => {
    const {trendingVideos} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {isdark} = value
          const theme = isdark ? 'dark' : 'light'
          return (
            <Ul theme={theme}>
              {trendingVideos.map(eachVideo => {
                const {
                  id,
                  publishedAt,
                  thumbnailUrl,
                  title,
                  viewCount,
                  channel,
                } = eachVideo

                const {name} = channel

                const timeValue = formatDistanceToNow(new Date(publishedAt), {
                  addSuffix: true,
                })

                const getVideo = () => {
                  const {history} = this.props
                  console.log(history)
                  history.push(`/videos/${id}`)
                }

                return (
                  <Li key={id} onClick={getVideo}>
                    <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
                    <Div>
                      <H1 theme={theme}>{title}</H1>
                      <P theme={theme} small>
                        {name}
                      </P>
                      <DetailsSection theme={theme}>
                        <P theme={theme}>{viewCount}</P>
                        <UlTime>
                          <Lim>
                            <P theme={theme}>{timeValue}</P>
                          </Lim>
                        </UlTime>
                      </DetailsSection>
                    </Div>
                  </Li>
                )
              })}
            </Ul>
          )
        }}
      </AppContext.Consumer>
    )
  }

  getTrendingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCode.loading:
        return this.loaderView()
      case apiStatusCode.success:
        return this.trendingView()
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
            <MainContainer>
              <HeadElement>
                <Header theme={theme} />
              </HeadElement>
              <HomeContents theme={theme} data-testid="trending">
                <Navbar theme={theme}>
                  <NavItems />
                  <Footer />
                </Navbar>
                <HomeItemsContainer theme={theme}>
                  <SubHeader theme={theme} data-testid="banner">
                    <Logo theme={theme}>
                      <HiFire />
                    </Logo>
                    <h1>Trending</h1>
                  </SubHeader>
                  {this.getTrendingView()}
                </HomeItemsContainer>
              </HomeContents>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(Trending)
