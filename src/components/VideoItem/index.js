import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  LinkItem,
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

  const timeValue = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  })

  return (
    <AppContext.Consumer>
      {value => {
        const {isdark} = value
        const theme = isdark ? 'dark' : 'light'
        return (
          <LinkItem to={`/videos/${id}`}>
            <Li theme={theme}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <SectionDetails theme={theme}>
                <Thumbnail channel src={profileImageUrl} alt="channel logo" />
                <div>
                  <H1>{title}</H1>
                  <P>{name}</P>
                  <DetailsSection theme={theme}>
                    <P>{viewCount}</P>
                    <Ul>
                      <Lim>
                        <P>{timeValue}</P>
                      </Lim>
                    </Ul>
                  </DetailsSection>
                </div>
              </SectionDetails>
            </Li>
          </LinkItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(VideoItem)
