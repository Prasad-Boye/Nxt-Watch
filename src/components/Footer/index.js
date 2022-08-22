import {ContactSection, Ul, Logo, H1, P} from './styledComponents'
import AppContext from '../../context'

const Footer = () => (
  <AppContext.Consumer>
    {value => {
      const {isdark} = value
      const theme = isdark ? 'dark' : 'light'
      return (
        <ContactSection theme={theme}>
          <H1>CONTACT US</H1>
          <Ul logo>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />

            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />

            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </Ul>
          <P>Enjoy! now to see your channels and recommendations!</P>
        </ContactSection>
      )
    }}
  </AppContext.Consumer>
)

export default Footer
