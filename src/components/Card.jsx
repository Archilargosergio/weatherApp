import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, foreCast }) => {

    //create date

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    //url for icons

    let url = '';
    let iconUrl = '';

    //spinner

    if (loadingData) {
        return < Spinner />
    }

    //icon contiditional

    if (showData) {
        url = 'https://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png';
    }

    return (
        <div className='mt-5'>
            {
                showData === true ? (

                    <section className='w-3/4 h-auto mx-auto bg-slate-900 text-white rounded-2xl'>
                        <div className='flex'>
                            <div className='w-1/3 h-auto text-center  rounded-2xl'>
                                <div className='absolute z-1 place-content-center py-16 px-16 font-bold '>
                                    <h1 className='m-2.5 text-6xl'> {weather.name} </h1>
                                    <p className='text-lg'> {date} </p>
                                    <h1 className='text-6xl'> {(weather.main.temp - 273.15).toFixed(1)}˚C</h1>
                                    <p className='flex items-center'> <img src={iconUrl} alt="icon/" /> {weather.weather[0].description} </p>
                                </div>
                                <img className='object-cover rounded-2xl  z-0' src="https://images.pexels.com/photos/1334607/pexels-photo-1334607.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                            </div>
                            <div className='m-6 text-start'>
                                <div> 2</div>
                                <div>3</div>
                            </div>
                        </div>
                    </section>

                ) : (
                    <h3 className='font-bold text-center text-white'>Without Data</h3>
                )
            }
        </div>
    )
}

export default Card;
