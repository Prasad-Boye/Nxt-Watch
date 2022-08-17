import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.theme === 'dark' ? '#0f0f0f' : '')};
`

export const HomeContents = styled.div`
  display: flex;
`

export const HomeItemsContainer = styled.div`
  width: 100%;
  padding: ${props => (props.main ? '0px' : '20px')};
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
`

export const H1 = styled.h1`
  font-size: 25px;
  font-weight: normal;
  width: 50%;
`

export const SearchICon = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#ffff' : 'transparent'};
  width: 80px;
  font-size: 16px;
  padding: 5px;
  text-align: center;
  color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
`

export const Search = styled.div`
  border: solid 1px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 6px;
`

export const Navbar = styled.div`
  width: 20%;
  min-width: 250px;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.theme === 'dark' ? '#1e293b' : '#f9f9f9'};
  @media (max-width: 767px) {
    display: none;
  }
`
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: ${props => (props.logo ? '' : 'space-between')};
  padding-left: 0px;
`
export const Logo = styled.img`
  width: ${props => (props.main ? '200px' : '40px')};
  margin-right: 10px;
`
