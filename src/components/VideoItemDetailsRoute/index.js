import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player/youtube'
import {formatDistanceStrict} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import AppContext from '../../context'
import Header from '../Header'
import NavItems from '../NavItems'
import Footer from '../Footer'

import {
  MainContainer,
  HeadElement,
  H1,
  HomeContents,
  Navbar,
  HomeItemsContainer,
  Ul,
  P,
  Lim,
  Logo,
  VideoPlayer,
  DetailsSection,
  Button,
  Hr,
  Thumbnail,
  SectionDetails,
  Description,
  VideoContainer,
} from './styledComponents'

const apiStatusCode = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiStatusCode.initial, videoDetails: ''}

  componentDidMount() {
    this.getItemData()
  }

  getItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusCode.loading})

    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const videoInfo = data.video_details
      console.log(videoInfo)
      const channel = {
        name: videoInfo.channel.name,
        profileImageUrl: videoInfo.channel.profile_image_url,
        subscriberCount: videoInfo.channel.subscriber_count,
      }
      const videoDetails = {
        channel,
        description: videoInfo.description,
        id: videoInfo.id,
        publishedAt: videoInfo.published_at,
        thumbnailUrl: videoInfo.thumbnail_url,
        title: videoInfo.title,
        videoUrl: videoInfo.video_url,
        viewCount: videoInfo.view_count,
      }
      this.setState({videoDetails, apiStatus: apiStatusCode.success})
    } else {
      this.setState({apiStatus: apiStatusCode.failure})
    }
  }

  playVideo = () => {}

  loaderView = () => (
    <div>
      <Loader type="TailSpin" color="#0b69ff" height="50" width="50" />
    </div>
  )

  VideoDetailsView = () => {
    const {videoDetails} = this.state
    const {
      channel,
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoDetails

    const {profileImageUrl, name, subscriberCount} = channel

    return (
      <AppContext.Consumer>
        {value => {
          const {isdark} = value
          const theme = isdark ? 'dark' : 'light'
          const formattedDate = new Date(publishedAt)
          const timeValue = formatDistanceStrict(formattedDate, new Date(), {
            addSuffix: true,
          })

          return (
            <VideoPlayer>
              <VideoContainer large>
                <ReactPlayer url={videoUrl} width="100%" height="400px" />
              </VideoContainer>
              <VideoContainer small>
                <ReactPlayer url={videoUrl} width="100%" height="220px" />
              </VideoContainer>
              <H1>{title}</H1>
              <DetailsSection main>
                <DetailsSection theme={theme}>
                  <P>{viewCount}</P>
                  <Ul>
                    <Lim>{timeValue}</Lim>
                  </Ul>
                </DetailsSection>
                <DetailsSection>
                  <Button theme={theme}>
                    <AiOutlineLike />
                    <P btn>Like</P>
                  </Button>
                  <Button theme={theme}>
                    <AiOutlineDislike />
                    <P btn>Dislike</P>
                  </Button>
                  <Button theme={theme}>
                    <MdPlaylistAdd />
                    <P btn>Save</P>
                  </Button>
                </DetailsSection>
              </DetailsSection>
              <Hr />
              <SectionDetails theme={theme}>
                <Thumbnail channel src={profileImageUrl} alt={name} />
                <div>
                  <div>
                    <H1>{name}</H1>
                    <P>{subscriberCount} subscribers</P>
                  </div>
                  <Description>{description}</Description>
                </div>
              </SectionDetails>
            </VideoPlayer>
          )
        }}
      </AppContext.Consumer>
    )
  }

  getVideoDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCode.loading:
        return this.loaderView()
      case apiStatusCode.success:
        return this.VideoDetailsView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isdark} = value
          const theme = isdark ? 'dark' : 'light'

          return (
            <MainContainer theme={theme}>
              <HeadElement>
                <Header theme={theme} />
              </HeadElement>
              <HomeContents>
                <Navbar theme={theme}>
                  <NavItems />
                  <Footer />
                </Navbar>
                <HomeItemsContainer
                  data-testid="videoItemDetails"
                  theme={theme}
                >
                  {this.getVideoDetailsView()}
                </HomeItemsContainer>
              </HomeContents>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
