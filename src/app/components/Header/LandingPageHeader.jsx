import './LandingPageHeader.css'
import React from 'react'
import { Logo } from '../Logo/Logo'
// import SpotifyWhite from '../assets/img/spotify-white.png'
import { HeaderNavigation } from './HeaderNavigation'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'


function useState(initialValue) {
    let val = initialValue;
    function change(newValue) {
        val = newValue;
    }
    return [val, change]
}

export const LandingPageHeader = () => {
    const [showMenu, setMenu] = React.useState(false);
    // const showMenu = state[0];
    // const setMenu = state[1];

    const toggleMenu = () => {
        setMenu(showMenu === false)
    }

    return (<header className="header">
        <div className="logo">
            <Logo useWhite={true} />
        </div>
        <MenuIcon className='menu-icon' onClick={toggleMenu} fill='white' />
        <div className='menu'>
            <HeaderNavigation className={showMenu ? 'mobile' : ''} />
        </div>
    </header>)
}
    