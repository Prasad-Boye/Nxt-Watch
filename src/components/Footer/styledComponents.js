import styled from 'styled-components'

export const ContactSection = styled.div`
  padding-left: 20px;
  margin-top: 25px;
  background-color: ${props =>
    props.theme === 'dark' ? '#1e293b' : '#f9f9f9'};
  color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
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
export const H1 = styled.h1`
  font-size: 24px;
`
export const P = styled.p`
  font-weight: bold;
`
