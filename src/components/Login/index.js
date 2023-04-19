// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const loginUser = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token

      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = props
      history.replace('/')
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="loginContainer">
      <h1 className="loginHeading">Please Login</h1>
      <button onClick={loginUser} type="button" className="loginButton">
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
