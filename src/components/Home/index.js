import {Component} from 'react'
import AppContext from '../../context/AppContext'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div>
              <Header />
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
