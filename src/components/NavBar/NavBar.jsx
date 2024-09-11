import React from 'react'
//app logo
import logo from '../../assets/images/react.svg'
//styles
import styles from './NavBar.module.css'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@awesome.me/kit-c09e05c963'
// import { faCoffeePot } from '@awesome.me/kit-c09e05c963'






export default function NavBar() {

    return (
        <nav data-type="desktop">
            <div className="logo">
                <img src={logo} alt="L&J" />
            </div>
            <ul>
                {/* <li><a href="#academic"> <FontAwesomeIcon icon={faCoffeePot} /> Classes</a></li> */}
                <li><a href="#teachers"> <FontAwesomeIcon icon={faCoffee} /> Teachers</a></li>
                <li><a href="#test"> For me?</a></li>
                <li><a href="#book">  Book a class</a></li>
            </ul>
        </nav>
    )
}
