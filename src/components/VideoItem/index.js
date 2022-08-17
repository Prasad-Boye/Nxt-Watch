import {withRouter} from 'react-router-dom'
import {formatDistanceStrict} from 'date-fns'
import {
  Li,
  Thumbnail,
  DetailsSection,
  H1,
  P,
  Ul,
  Lim,
  SectionDetails,
} from './styledComponents'
import AppContext from '../../context'

const VideoItem = props => {
  const {details} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = details

  const {name, profileImageUrl} = channel

  const publishedDate = new Date(publishedAt)

  const timeValue = formatDistanceStrict(publishedDate, new Date(), {
    addSuffix: true,
  })

  const getVideoDetails = () => {
    const {history} = props
    history.push(`/videos/${id}`)
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isdark} = value
        const theme = isdark ? 'dark' : 'light'
        return (
          <Li theme={theme} onClick={getVideoDetails}>
            <Thumbnail src={thumbnailUrl} alt={title} />
            <SectionDetails theme={theme}>
              <Thumbnail channel src={profileImageUrl} alt={name} />
              <div>
                <H1>{title}</H1>
                <P>{name}</P>
                <DetailsSection theme={theme}>
                  <P>{viewCount}</P>
                  <Ul>
                    <Lim>{timeValue}</Lim>
                  </Ul>
                </DetailsSection>
              </div>
            </SectionDetails>
          </Li>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(VideoItem)
