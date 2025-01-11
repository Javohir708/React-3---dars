import React from 'react'
import './Header.scss'
import {LINKS} from '../../static/index'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <nav className='navbar'>
                <ul className='navbar__collection'>
                    {
                        LINKS.map((item, inx) => {
                            return <li className='navbar__item' key={inx}>
                                <a className='navbar__link' href=""><span>{item}</span></a>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header