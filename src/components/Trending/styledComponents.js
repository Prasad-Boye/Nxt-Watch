import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
`

export const HomeContents = styled.div`
  display: flex;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : ' #f9f9f9'};
`

export const HomeItemsContainer = styled.div`
  width: 100%;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : ' #f9f9f9'};
`
export const HeadElement = styled.div`
  position: sticky;
  top: 0;
`

export const H1 = styled.p`
  font-size: ${props => (props.small ? '16px' : '20px')};
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

export const P = styled.p`
  margin: 5px;
  margin-left: ${props => (props.btn ? '10px' : '0px')};
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#606060')};
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
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
export const Ul = styled.ul`
  list-style: none;
  padding-left: 0px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  padding: 20px;
`
export const UlTime = styled.ul`
  display: flex;
  padding-left: 0px;
  align-items: center;
  margin-left: 10px;
  list-style: disc;
`
export const DetailsSection = styled.div`
  display: flex;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '')};
  align-items: center;
`

export const Lim = styled.li`
  margin-left: 10px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#606060')};
`

export const Li = styled.li`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 479px) {
    flex-direction: column;
  }
`
export const Thumbnail = styled.img`
  width: 50%;
  @media (max-width: 479px) {
    width: 100%;
  }
`
export const Div = styled.div`
  margin-left: 20px;
  @media (max-width: 479px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`
export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#424242' : '#f1f1f1'};
  padding: 20px 50px;
`
export const Logo = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e2e8f0'};
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 20px;
  color: #ff0000;
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
