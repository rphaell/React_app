import Logo from '../../assets/werewolf.png'
import data from './data'
import './navbar.css'
import Wallet from '../../assets/metamask.png'
import {GiWerewolf} from 'react-icons/gi'


const Navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href= "index.html" className = "nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <a href=""><img id='wallet' src={Wallet} alt="" /></a>
      </div>
    </nav>
  )
}

export default Navbar