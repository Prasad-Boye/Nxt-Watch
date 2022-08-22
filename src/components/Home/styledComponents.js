import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const HomeContents = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const HomeItemsContainer = styled.div`
  width: 100%;
  padding: ${props => (props.main ? '0px' : '20px 0px 20px 20px')};
`
export const HeadElement = styled.div`
  position: sticky;
  top: 0;
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-height: 300px;
  padding: 20px;
  display: ${props => (props.bannerCloseStatus === 'close' ? 'none' : 'flex')};
  justify-content: space-between;
`

export const H1 = styled.p`
  font-size: ${props => (props.failure ? '30px' : '20px')};
  font-weight: 500;
  margin: ${props => (props.failure ? '30px' : '')};
  margin-bottom: 20px;
  color: ${props => (props.theme === 'dark' ? '#cbd5e1' : '#181818')};
`

export const H2 = styled.h1`
  font-size: ${props => (props.failure ? '30px' : '20px')};
  font-weight: 500;
  margin: ${props => (props.failure ? '30px' : '')};
  margin-bottom: 20px;
  color: ${props => (props.theme === 'dark' ? '#cbd5e1' : '#181818')};
`

export const SearchIcon = styled.button`
  background-color: ${props =>
    props.theme === 'dark' ? '#ffffff20' : '#ebebeb'};
  width: 80px;
  border: none;
  border-left: 1px solid
    ${props => (props.theme === 'dark' ? '#606060' : ' #cccccc ')};
  font-size: 16px;
  padding: 5px;
  text-align: center;
  color: ${props => (props.theme === 'dark' ? '#cbd5e1' : '#181818')};
`

export const Search = styled.button`
  border: 1px solid
    ${props => (props.theme === 'dark' ? '#606060' : ' #cccccc ')};
  width: 50%;
  @media (max-width: 767px) {
    width: 96%;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#cbd5e1' : '#181818')};
  padding: 0px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 6px;
  width: 100%;
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#cbd5e1' : '#181818')};
`

export const Navbar = styled.div`
  width: 20%;
  min-width: 250px;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#f9f9f9'};
  @media (max-width: 767px) {
    display: none;
  }
`
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
`
export const Logo = styled.img`
  width: ${props => (props.main ? '200px' : '40px')};
  margin-right: 10px;
`
export const Button = styled.button`
  background-color: ${props => (props.retry ? '#4f46e5' : 'transparent')};
  color: ${props => (props.retry ? '#ffffff' : '')};
  border: ${props => (props.get ? '2px solid' : 'none')};
  font-size: ${props => (props.get || props.retry ? '14px' : '20px')};
  padding: ${props => (props.get || props.retry ? '8px' : '')};
  width: ${props => (props.retry ? '80px' : '')};
  height: ${props => (props.retry ? '40px' : '')};
  border-radius: ${props => (props.retry ? '5px' : '')};
  margin-top: ${props => (props.retry ? '20px' : '')};
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 5%;
`

export const Img = styled.img`
  width: 50%;
`
export const P = styled.p`
  margin: 5px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#606060')};
`
