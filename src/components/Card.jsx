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

                    <section className='w-2/3 h-auto mx-auto bg-slate-900 text-white rounded-2xl'>
                        <div className='flex '>
                            <div className='w-2/3 h-auto rounded-2xl  justify-center'>
                                <div className='absolute z-1 font-bold lg:m-16  md:m-6'>
                                    <h1 className='m-2.5 lg:text-6xl md:text-4xl'> {weather.name} </h1>
                                    <p className='text-lg'> {date} </p>
                                    <h1 className='lg:text-6xl md:text-4xl'> {(weather.main.temp - 273.15).toFixed(1)}˚C</h1>
                                    <p className=' flex place-items-center lg:p-4 md:p-0'> <img src={iconUrl} alt="icon/" /> {weather.weather[0].description} </p>
                                </div>
                                <img className='w-full h-auto object-cover rounded-2xl  z-0' src="https://images.pexels.com/photos/1334607/pexels-photo-1334607.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                            </div>
                            <div className='flex flex-col m-10 text-start w-full h-auto'>
                                <div>
                                    <h5 className=''>Max Temperature {(weather.main.temp_max - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Min Temperature {(weather.main.temp_min - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Feels like {(weather.main.feels_like - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Humidity {Math.floor(weather.main.humidity)} %</h5>
                                    <h5 className=''>Wind {Math.floor(weather.wind.speed)} km/h</h5>
                                </div>
                                <hr className='mt-5' />
                                <div>

                                </div>
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
