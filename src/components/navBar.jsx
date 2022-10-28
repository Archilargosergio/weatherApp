import React, { useState } from 'react';
import menuIcon from '../assets/menu_FILL0_wght400_GRAD0_opsz48.png';
import Menu from './Menu';

const NavBar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <div className='flex w-full h-10 bg-slate-800 place-content-center'>
            <div className='w-10 mx-2 h-auto hover:cursor-pointer'>
                <img className='w-full' src={menuIcon} alt="menu" onClick={handleMenu} />
                {menu && < Menu />}
            </div>
            <h3 className='w-full h-auto pt-2 mr-16 text-center text-white font-bold'> APLICATION WEATHER </h3>
        </div>
    )
}

export default NavBar;