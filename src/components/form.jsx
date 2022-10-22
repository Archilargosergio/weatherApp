import React, { useState } from 'react';
import Loop from '../assets/search_FILL0_wght400_GRAD0_opsz48.png';

const Form = ({ newLocation }) => {

    const [city, setCity] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ city });
        if (city === '' || !city) return;

        newLocation({ city });
    }

    return (
        <section className='w-3/4 mx-auto mt-5 place-item-center'>
            <form className='bg-slate-300 flex flex-row place-content-center rounded-3xl' href='' onSubmit={handleSubmit}>
                <input className='w-full px-5 bg-transparent text-start placeholder-black-200' type="text" placeholder='Write the name of the city' onChange={(e) => setCity(e.target.value)} />
                <button type='submit'>
                    <img className='px-3 hover:cursor-pointer' src={Loop} alt="" />
                </button>
            </form>
        </section>
    )
}

export default Form;