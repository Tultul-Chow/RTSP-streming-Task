import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header id="header" className="header">
                <div >
                    <Link to="/"> Intelense Task </Link>
                </div>
            </header>
        </div>

    )
}

export default Header
