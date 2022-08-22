import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  width: 32%;
  margin-bottom: 50px;
  margin-right: 1%;
  @media (max-width: 991px) {
    width: 48%;
  }
  @media (max-width: 479px) {
    width: 100%;
    margin-right: 4%;
  }
  text-decoration: none;
`

export const Li = styled.li``

export const Thumbnail = styled.img`
  width: ${props => (props.channel ? '50px' : '100%')};
  height: ${props => (props.channel ? '50px' : '150px')};
  margin: ${props => (props.channel ? '20px 20px 0px 0px' : '')};
`

export const SectionDetails = styled.div`
  display: flex;
  color: ${props => (props.theme === 'dark' ? '#f8fafc' : '#0f0f0f')};
`

export const DetailsSection = styled.div`
  display: flex;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '')};
`
export const H1 = styled.p`
  font-size: 16px;
  font-weight: 500;
`
export const P = styled.p`
  margin: 5px;
  margin-left: 0px;
`
export const Ul = styled.ul`
  display: flex;
  padding-left: 0px;
  align-items: center;
  margin-left: 10px;
  list-style: disc;
`
export const Lim = styled.li`
  margin-left: 10px;
`
