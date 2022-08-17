import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import AppContext from '../../context'
import Header from '../Header'
import Footer from '../Footer'
import NavItems from '../NavItems'
import VideoItem from '../VideoItem'
import {
  MainContainer,
  HeadElement,
  Banner,
  H1,
  Search,
  Input,
  SearchICon,
  HomeContents,
  Navbar,
  HomeItemsContainer,
  Ul,
  Logo,
} from './styledComponents'

const apiStatusCode = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {apiStatus: apiStatusCode.initial, pageData: ''}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({apiStatus: apiStatusCode.loading})
    const url = 'https://apis.ccbp.in/videos/all?search='
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const videoData = data.videos
      console.log(videoData)
      const updatedVideoData = videoData.map(each => {
        const {channel} = each
        const updatedChannel = {
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
        }
        return {
          channel: updatedChannel,
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }
      })
      console.log(updatedVideoData)
      this.setState({
        apiStatus: apiStatusCode.success,
        pageData: updatedVideoData,
      })
    } else {
      this.setState({apiStatus: apiStatusCode.failure})
    }
  }

  getPageView = () => {
    const {pageData} = this.state
    return (
      <HomeItemsContainer>
        <Search>
          <Input placeholder="Search" />
          <SearchICon>
            <BsSearch />
          </SearchICon>
        </Search>
        <Ul>
          {pageData.map(eachItem => (
            <VideoItem details={eachItem} key={eachItem.id} />
          ))}
        </Ul>
      </HomeItemsContainer>
    )
  }

  getPageResponse = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCode.success:
        return this.getPageView()

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
          const logo = isdark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
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
                <HomeItemsContainer main>
                  <Banner>
                    <Logo main src={logo} alt="" />
                    <H1>Buy NxtWatch Premium prepaid plans with UPI</H1>
                    <button type="button">Get Now</button>
                  </Banner>
                  {this.getPageResponse()}
                </HomeItemsContainer>
              </HomeContents>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
