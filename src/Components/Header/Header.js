import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div >
            <aside className='header'>
                <div>
                    <img src='../Photos/hero-logo.png' alt={`Hero's Association`} style={{width:'100px', height:'100px'}}/>
                    <span><strong>Hero's Association</strong></span>
                </div>
               <nav>
                   <ul className='listclass'>
                    <li>
                        <Link className='link' to='HomePage'>Home</Link>
                    </li>
                    <li>
                        <Link className='link' to='Login'>Login</Link>
                    </li>
                </ul>
               </nav>
            </aside>
        </div>
    )
}

export default Header
