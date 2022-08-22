import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const HomeContents = styled.div`
  display: flex;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
`

export const HomeItemsContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : ' #f9f9f9'};
`
export const HeadElement = styled.div`
  position: sticky;
  top: 0;
`

export const H1 = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 25px;
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
  padding-left: 0px;
  align-items: center;
  margin-left: 10px;
  list-style: disc;
`
export const Logo = styled.img`
  width: ${props => (props.main ? '200px' : '40px')};
  margin: 0px 10px;
`

export const VideoPlayer = styled.div`
  width: 100%;
  padding-bottom: 5%;
`
export const VideoContainer = styled.div`
  @media (max-width: 767px) {
    display: ${props => (props.large ? 'none' : 'block')};
  }
  @media (min-width: 768px) {
    display: ${props => (props.large ? 'block' : 'none')};
  }
`

export const DetailsSection = styled.div`
  display: flex;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '')};
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: ${props => (props.main ? 'column' : '')};
    align-items: ${props => (props.main ? 'flex-start' : '')};
  }
`
export const P = styled.p`
  margin: 5px;
  margin-left: ${props => (props.btn ? '10px' : '0px')};
`
export const Lim = styled.li`
  margin-left: 10px;
`
export const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  font-size: 16px;
  color: ${props =>
    props.likedStatus === 'liked' || props.likedStatus === 'disliked'
      ? '#2563eb'
      : ' #64748b'};
`

export const SaveButton = styled.button`
  background-color: transparent;
  display: ${props => (props.savedStatus === 'saved' ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-between;
  border: none;
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? ' #64748b' : '')};
`

export const SavedButton = styled.button`
  background-color: transparent;
  display: ${props => (props.savedStatus !== 'saved' ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-between;
  border: none;
  font-size: 16px;
  color: #2563eb;
`

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid;
`
export const Thumbnail = styled.img`
  width: ${props => (props.channel ? '50px' : '100%')};
  height: ${props => (props.channel ? '50px' : '150px')};
  margin: ${props => (props.channel ? '20px 20px 0px 0px' : '')};
`

export const SectionDetails = styled.div`
  display: flex;
  color: ${props => (props.theme === 'dark' ? '#f8fafc' : '')};
`
export const Description = styled.p`
  margin-top: 50px;
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
