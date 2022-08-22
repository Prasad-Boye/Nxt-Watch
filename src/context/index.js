import React from 'react'

const AppContext = React.createContext({
  isdark: false,
  closeHomeBanner: () => {},
  closeBanner: false,
  changeTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
  removeFromSavedVideos: () => {},
  likedVideos: [],
  addToLikedList: () => {},
  dislikedVideos: [],
  addToDislikedList: () => {},
  removeFromLiked: () => {},
  removeFromDisliked: () => {},
})

export default AppContext
