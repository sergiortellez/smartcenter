import React from 'react'
//app logo
// import logo from '../../assets/images/react.svg'
//styles
import styles from './NavBar.module.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'
import { faCat } from '@awesome.me/kit-c09e05c963/icons/sharp/solid'
import { faDog } from '@awesome.me/kit-c09e05c963/icons/sharp-duotone/solid'


export default function NavBar() {

    return (
        <nav data-type="desktop">
            <div className="logo">
                {/* <img src={logo} alt="L&J" /> */}
            </div>
            <ul>
                {/* <li><a href="#academic"> <FontAwesomeIcon icon={faCoffeePot} /> Classes</a></li> */}
                <li><a href="#teachers"> <FontAwesomeIcon icon={faHouse} /> Teachers</a></li>
                <li><a href="#test"> For me?</a></li>
                <li><a href="#book">  Book a class</a></li>
            </ul>
        </nav>

    )
}
