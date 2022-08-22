import styled from 'styled-components'

export const ContactSection = styled.div`
  padding-left: 20px;
  margin-top: 25px;
  padding-right: 5px;
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#f9f9f9'};
  color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
`
export const Ul = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.logo ? '' : 'space-between')};
  padding-left: 0px;
`

export const Logo = styled.img`
  width: ${props => (props.main ? '200px' : '40px')};
  margin-right: 10px;
`
export const H1 = styled.p`
  font-size: 24px;
  font-weight: 600;
`
export const P = styled.p`
  font-weight: bold;
`
