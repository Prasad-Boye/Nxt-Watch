import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#1e293b' : '#fff')};
  color: ${props => (props.isDark ? '#fff' : '#000')};
  padding: 20px;
`

export const DetailsContainer = styled.div`
  box-shadow: ${props => (props.isDark ? '' : '0px 4px 12px 0px #bfbfbf')};
  padding: 50px 20px;
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
`

export const LoginLogo = styled.img`
  width: 150px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: 100%;
  min-width: 300px;
  height: 35px;
  padding: 5px;
  outline: none;
  border: 1px solid #475569;
  border-radius: 5px;
  margin-bottom: ${props => (props.space ? '10px' : '20px')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
`
export const Label = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#7e858e')};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
`
export const Error = styled.p`
  color: #ff0000;
  font-size: 13px;
  margin-bottom: 0px;
  height: 12px;
`

export const Checkbox = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
`
