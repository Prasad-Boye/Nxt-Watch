import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AppContext from './context/AppContext'
import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import './App.css'

class App extends Component {
  state = {
    isDark: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Redirect to="/not-found" />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
