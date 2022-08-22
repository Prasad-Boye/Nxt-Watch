import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import AppContext from '../../context'
import Header from '../Header'
import Footer from '../Footer'
import NavItems from '../NavItems'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import {
  MainContainer,
  LoaderContainer,
  HeadElement,
  Banner,
  H1,
  H2,
  Search,
  Input,
  SearchIcon,
  HomeContents,
  Navbar,
  HomeItemsContainer,
  Ul,
  Logo,
  Button,
  FailureContainer,
  Img,
  P,
} from './styledComponents'

const apiStatusCode = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusCode.initial,
    pageData: '',
    searchInput: '',
    filteredList: '',
  }

  componentDidMount() {
    this.fetchData()
  }

  componentWillUnmount() {}

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
        filteredList: updatedVideoData,
      })
    } else {
      this.setState({apiStatus: apiStatusCode.failure})
    }
  }

  searchItems = () => {
    const {searchInput, pageData} = this.state
    const searchText = searchInput.toLowerCase()
    const matchingList = eachItem =>
      eachItem.title.toLowerCase().includes(searchText)

    const filteredList = pageData.filter(matchingList)
    this.setState({filteredList})
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getPageView = () => {
    const {filteredList} = this.state
    if (filteredList.length > 0) {
      return (
        <HomeItemsContainer>
          <Ul>
            {filteredList.map(eachItem => (
              <VideoItem details={eachItem} key={eachItem.id} />
            ))}
          </Ul>
        </HomeItemsContainer>
      )
    }
    return (
      <FailureContainer>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <H2>No Search results found</H2>
        <P>Try different key words or remove search filter</P>
        <Button retry onClick={this.fetchData}>
          Retry
        </Button>
      </FailureContainer>
    )
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

  getPageResponse = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCode.loading:
        return this.loaderView()
      case apiStatusCode.failure:
        return this.getFailureView()
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
          const {isdark, closeBanner, closeHomeBanner} = value
          const theme = isdark ? 'dark' : 'light'
          const logo = isdark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const {searchInput} = this.state
          const close = () => closeHomeBanner()
          const bannerCloseStatus = closeBanner ? 'close' : ''
          return (
            <MainContainer theme={theme}>
              <HeadElement>
                <Header theme={theme} />
              </HeadElement>
              <HomeContents data-testid="home" theme={theme}>
                <Navbar theme={theme}>
                  <NavItems />
                  <Footer />
                </Navbar>
                <HomeItemsContainer main>
                  <Banner
                    data-testid="banner"
                    bannerCloseStatus={bannerCloseStatus}
                  >
                    <div>
                      <Logo main src={logo} alt="nxt watch logo" />
                      <H1>Buy Nxt Watch Premium</H1>
                      <Button get type="button">
                        GET IT NOW
                      </Button>
                    </div>
                    <div>
                      <Button data-testid="close" type="button" onClick={close}>
                        <AiOutlineClose />
                      </Button>
                    </div>
                  </Banner>
                  <HomeItemsContainer>
                    <Search theme={theme}>
                      <Input
                        placeholder="Search"
                        theme={theme}
                        onChange={this.changeSearchInput}
                        value={searchInput}
                        type="search"
                      />
                      <SearchIcon
                        data-testid="searchButton"
                        theme={theme}
                        onClick={this.searchItems}
                      >
                        <BsSearch />
                      </SearchIcon>
                    </Search>
                  </HomeItemsContainer>
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
