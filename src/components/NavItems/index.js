import {Component} from 'react'
import AppContext from '../../context/AppContext'

class NavItems extends Component {
  render() {
    return (
      <AppContext>
        {value => {
          const {isDark} = value
          return <div>{isDark}</div>
        }}
      </AppContext>
    )
  }
}

export default NavItems
