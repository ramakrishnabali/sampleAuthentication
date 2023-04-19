// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="navList">
    <li className="navListItem">
      <Link to="/">Home</Link>
    </li>

    <li className="navListItem">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
