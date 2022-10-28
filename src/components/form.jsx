import React, { useState } from 'react';
import Loop from '../assets/search_FILL0_wght400_GRAD0_opsz48.png';

const Form = ({ newLocation }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ city });
        (city === '' || !city) ? alert('Write a real city name!') : newLocation(city);
    }

    return (
        <section className='w-3/5 mx-auto mt-5 place-item-center'>
            <form className='bg-slate-300 flex flex-row place-content-center rounded-3xl' onSubmit={handleSubmit} >
                <input className='w-full px-4 bg-transparent text-start placeholder-black-200' type="text" placeholder='Write the name of the city' onChange={(e) => setCity(e.target.value)} />
                <button type='submit' className='rounded-xl'>
                    <img className='w-max px-3 hover:cursor-pointer dark:hover:bg-slate-400' src={Loop} alt="" />
                </button>
                <button className='w-20 hover:cursor-pointer dark:hover:bg-slate-400 rounded-xl px-2' type="reset">Reset</button>
            </form>
        </section>
    )
}

export default Form;