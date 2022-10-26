import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, forecast }) => {

    //create date

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    //url for icons weather

    let url = '';
    let iconUrl = '';

    //url for icons each 3, 6 and 9 hours

    let iconUrl3hr = '';
    let iconUrl6hr = '';
    let iconUrl9hr = '';

    let foreCastDate3hr = '';
    let foreCastDate6hr = '';
    let foreCastDate9hr = '';

    //spinner

    if (loadingData) {
        return < Spinner />
    }

    //icon contiditional

    if (showData) {
        url = 'https://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png';

        iconUrl3hr = url + forecast.list[1].weather[0].icon + '.png';
        iconUrl6hr = url + forecast.list[2].weather[0].icon + '.png';
        iconUrl9hr = url + forecast.list[3].weather[0].icon + '.png';

        foreCastDate3hr = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        foreCastDate6hr = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
        foreCastDate9hr = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
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
                                <div className='mt-5'>
                                    <h5>
                                        <p>{foreCastDate3hr} h</p>
                                        <p><img src={iconUrl3hr} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                        <p>{(forecast.list[1].main.temp - 273.15).toFixed(1)}˚C</p>
                                    </h5>
                                    <h5>
                                        <p>{foreCastDate6hr} h</p>
                                        <p><img src={iconUrl6hr} alt="icon" />{forecast.list[2].weather[0].description}</p>
                                        <p>{(forecast.list[2].main.temp - 273.15).toFixed(1)}˚C</p>
                                    </h5>
                                    <h5>
                                        <p>{foreCastDate9hr} h</p>
                                        <p><img src={iconUrl9hr} alt="icon" />{forecast.list[3].weather[0].description}</p>
                                        <p>{(forecast.list[3].main.temp - 273.15).toFixed(1)}˚C</p>
                                    </h5>

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
