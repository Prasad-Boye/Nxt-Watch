import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AppContext from './context'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetailsRoute'
import Trending from './components/Trending'
import GamingRoute from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import './App.css'

class App extends Component {
  state = {
    isdark: false,
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
    closeBanner: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({isdark: !prevState.isdark}))
  }

  addToLikedList = id => {
    const {likedVideos} = this.state
    if (likedVideos.includes(id)) {
      const updatedLikedVideos = likedVideos.filter(eachId => eachId !== id)
      this.setState({likedVideos: updatedLikedVideos})
    } else {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, id],
      }))
    }
  }

  addToDislikedList = id => {
    const {dislikedVideos} = this.state
    if (dislikedVideos.includes(id)) {
      const updatedDislikedVideos = dislikedVideos.filter(
        eachId => eachId !== id,
      )
      this.setState({dislikedVideos: updatedDislikedVideos})
    } else {
      this.setState(prevState => ({
        dislikedVideos: [...prevState.dislikedVideos, id],
      }))
    }
  }

  removeFromLiked = id => {
    const {likedVideos} = this.state
    const updatedLiked = likedVideos.filter(videoId => videoId !== id)
    this.setState({likedVideos: updatedLiked})
  }

  removeFromDisliked = id => {
    const {dislikedVideos} = this.state
    const updatedDisliked = dislikedVideos.filter(videoId => videoId !== id)
    this.setState({dislikedVideos: updatedDisliked})
  }

  addToSavedVideos = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))
  }

  removeFromSavedVideos = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  closeHomeBanner = () => {
    this.setState({closeBanner: true})
  }

  render() {
    const {
      isdark,
      savedVideos,
      likedVideos,
      dislikedVideos,
      closeBanner,
    } = this.state
    return (
      <AppContext.Provider
        value={{
          isdark,
          changeTheme: this.changeTheme,
          savedVideos,
          addToSavedVideos: this.addToSavedVideos,
          removeFromSavedVideos: this.removeFromSavedVideos,
          likedVideos,
          dislikedVideos,
          addToDislikedList: this.addToDislikedList,
          addToLikedList: this.addToLikedList,
          removeFromLiked: this.removeFromLiked,
          removeFromDisliked: this.removeFromDisliked,
          closeBanner,
          closeHomeBanner: this.closeHomeBanner,
        }}
      >
        <Switch>
          <Route exact path="/gaming" component={GamingRoute} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
