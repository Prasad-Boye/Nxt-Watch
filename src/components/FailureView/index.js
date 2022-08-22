import AppContext from '../../context'
import {H2, Img, FailureContainer, P} from './styledComponents'

const FailureView = () => (
  <AppContext.Consumer>
    {value => {
      const {isdark} = value
      const theme = isdark ? 'dark' : 'light'
      const image = isdark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      return (
        <FailureContainer theme={theme}>
          <Img src={image} alt="failure view" />
          <H2 theme={theme}>Oops! Something Went Wrong</H2>
          <P>We are having some trouble to complete your request.</P>
          <P>Please try again.</P>
        </FailureContainer>
      )
    }}
  </AppContext.Consumer>
)

export default FailureView
