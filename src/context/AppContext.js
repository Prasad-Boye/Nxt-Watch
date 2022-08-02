import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
})

export default AppContext
