import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player/youtube'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'
import AppContext from '../../context'
import Header from '../Header'
import NavItems from '../NavItems'
import Footer from '../Footer'
import FailureView from '../FailureView'

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
  VideoPlayer,
  DetailsSection,
  Button,
  Hr,
  Thumbnail,
  SectionDetails,
  Description,
  VideoContainer,
  LoaderContainer,
  SaveButton,
  SavedButton,
  FailureContainer,
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
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  getFailureView = () => (
    <FailureContainer>
      <FailureView />
      <Button retry onClick={this.getItemData}>
        Retry
      </Button>
    </FailureContainer>
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
          const {
            isdark,
            savedVideos,
            addToSavedVideos,
            removeFromSavedVideos,
            likedVideos,
            dislikedVideos,
            addToDislikedList,
            addToLikedList,
            removeFromDisliked,
            removeFromLiked,
          } = value
          const isVideoPresent = savedVideos.filter(
            eachVideo => eachVideo.id === id,
          )
          const savedStatus = isVideoPresent.length > 0 ? 'saved' : ''
          console.log(savedVideos)

          const theme = isdark ? 'dark' : 'light'
          const likedStatus = likedVideos.includes(id) ? 'liked' : ''
          const disLikedStatus = dislikedVideos.includes(id) ? 'disliked' : ''
          const timeValue = formatDistanceToNow(new Date(publishedAt), {
            addSuffix: true,
          })

          const saveItem = () =>
            addToSavedVideos({
              id,
              thumbnailUrl,
              title,
              viewCount,
              timeValue,
              name,
            })
          const removeSave = () => removeFromSavedVideos(id)

          const removeLike = () => removeFromLiked(id)
          const removeDislike = () => removeFromDisliked(id)

          const likeVideo = () => {
            addToLikedList(id)
            removeDislike()
          }
          const dislikeVideo = () => {
            addToDislikedList(id)
            removeLike()
          }

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
                  <Button
                    theme={theme}
                    likedStatus={likedStatus}
                    onClick={likeVideo}
                  >
                    <AiOutlineLike />
                    <P btn>Like</P>
                  </Button>
                  <Button
                    theme={theme}
                    likedStatus={disLikedStatus}
                    onClick={dislikeVideo}
                  >
                    <AiOutlineDislike />
                    <P btn>Dislike</P>
                  </Button>
                  <SaveButton
                    theme={theme}
                    savedStatus={savedStatus}
                    onClick={saveItem}
                  >
                    <MdPlaylistAdd />
                    <P btn>Save</P>
                  </SaveButton>
                  <SavedButton
                    theme={theme}
                    savedStatus={savedStatus}
                    onClick={removeSave}
                  >
                    <MdPlaylistAddCheck />
                    <P btn>Saved</P>
                  </SavedButton>
                </DetailsSection>
              </DetailsSection>
              <Hr />
              <SectionDetails theme={theme}>
                <Thumbnail channel src={profileImageUrl} alt="channel logo" />
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
      case apiStatusCode.failure:
        return this.getFailureView()
      case apiStatusCode.success:
        return this.VideoDetailsView()
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
            <MainContainer theme={theme} data-testid="videoItemDetails">
              <HeadElement>
                <Header theme={theme} />
              </HeadElement>
              <HomeContents data-testid="videoItemDetails" theme={theme}>
                <Navbar theme={theme}>
                  <NavItems />
                  <Footer />
                </Navbar>
                <HomeItemsContainer theme={theme}>
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
