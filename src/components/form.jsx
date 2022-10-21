import React from 'react';
import Loop from '../assets/search_FILL0_wght400_GRAD0_opsz48.png';

const form = () => {
    return (
        <section className='w-3/4 mx-40 mt-5 place-item-center'>
            <div className='bg-slate-400 flex flex-row place-content-center rounded-3xl'>
                <input className='w-full bg-transparent text-center' type="text" placeholder='Write the name of the city' />
                <img className='pr-2' src={Loop} alt="" />
            </div>
        </section>

    )
}

export default form;