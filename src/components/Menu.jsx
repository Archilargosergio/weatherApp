import React from 'react';

const Menu = () => {
    return (
        <div className='w-16 h-full grid place-content-start m-1 bg-slate-800 rounded-md'>
            <ul className='w-full h-auto text-white font-bold'>
                <li className='w-full mx-1 my-2 rounded-md hover:bg-black'><a href="/">Start</a></li>
            </ul>
        </div>
    )
}

export default Menu;