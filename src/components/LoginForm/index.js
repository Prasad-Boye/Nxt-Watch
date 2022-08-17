import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import AppContext from '../../context'
import {
  MainContainer,
  DetailsContainer,
  LogoContainer,
  LoginLogo,
  Input,
  Label,
  Form,
  Checkbox,
  CheckboxContainer,
  Button,
  Error,
} from './styledComponents'

class LoginForm extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  revealPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  setUsername = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  checkUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const {history} = this.props
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      history.replace('/')
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 60})
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const isLoggedIn = Cookies.get('jwt_token')
    console.log(isLoggedIn)
    if (isLoggedIn !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isdark} = value
          console.log(isdark)
          const theme = isdark ? 'dark' : 'light'
          const logo = isdark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-isdark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <MainContainer theme={theme}>
              <DetailsContainer theme={theme}>
                <LogoContainer>
                  <LoginLogo src={logo} alt="Website Logo" />
                </LogoContainer>
                <Form onSubmit={this.checkUser}>
                  <Label htmlFor="username" theme={theme}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    onChange={this.setUsername}
                    value={username}
                    placeholder="Username"
                    id="username"
                    theme={theme}
                  />
                  <Label htmlFor="password" theme={theme}>
                    PASSWORD
                  </Label>
                  <Input
                    type={showPassword === true ? 'text' : 'password'}
                    onChange={this.setPassword}
                    value={[password]}
                    placeholder="Password"
                    id="password"
                    theme={theme}
                    space
                  />
                  <CheckboxContainer>
                    <Checkbox
                      id="show-password"
                      type="checkbox"
                      onChange={this.revealPassword}
                    />
                    <label htmlFor="show-password">Show Password</label>
                  </CheckboxContainer>
                  <Button type="submit">Login</Button>
                </Form>
                <Error>{errorMsg !== '' ? `*${errorMsg}` : ''}</Error>
              </DetailsContainer>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default LoginForm
