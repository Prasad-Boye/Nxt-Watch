import styled from 'styled-components'

export const NotFoundContainer = styled.div`
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
export const H1 = styled.h1`
  font-size: ${props => (props.failure ? '30px' : '40px')};
  font-weight: 500;
  margin: ${props => (props.failure ? '30px' : '')};
  margin-bottom: 20px;
  color: ${props => (props.theme === 'dark' ? '#cbd5e1' : '#181818')};
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`
export const HomeContents = styled.div`
  display: flex;
`

export const HomeItemsContainer = styled.div`
  width: 100%;
  padding: ${props => (props.main ? '0px' : '20px 0px 20px 20px')};
`
export const HeadElement = styled.div`
  position: sticky;
  top: 0;
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
