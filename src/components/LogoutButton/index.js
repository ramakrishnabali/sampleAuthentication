// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const {history} = props

  const logoutUser = () => {
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <div className="logoutContainer">
      <button onClick={logoutUser} className="logoutButton" type="button">
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
