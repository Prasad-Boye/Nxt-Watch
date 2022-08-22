import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 20px;
`

export const Img = styled.img`
  width: 50%;
`

export const P = styled.p`
  margin: 5px;
  margin-left: ${props => (props.btn ? '10px' : '0px')};
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#606060')};
`

export const H2 = styled.h1`
  font-size: ${props => (props.failure ? '30px' : '20px')};
  font-weight: 500;
  margin: ${props => (props.failure ? '30px' : '')};
  margin-bottom: 20px;
  color: ${props => (props.theme === 'dark' ? '#cbd5e1' : '#181818')};
`
