import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AppContext from './context'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetailsRoute'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import './App.css'

class App extends Component {
  state = {
    isdark: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({isdark: !prevState.isdark}))
  }

  render() {
    const {isdark} = this.state
    return (
      <AppContext.Provider
        value={{
          isdark,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Redirect to="/not-found" />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
