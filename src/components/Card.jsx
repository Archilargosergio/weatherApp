import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, forecast }) => {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    let url = "";
    let iconUrl = "";

    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";

    if (loadingData) {
        return <Spinner />;
    }

    if (showData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className='mt-5'>
            {
                showData === true ? (

                    <section className='lg:w-2/4 sm:w-1/2 h-auto mx-auto bg-slate-900 text-white rounded-2xl '>
                        <div className='grid sm:grid-cols-1 lg:grid-cols-2 lg:w-full h-auto gap-0'>
                            <div className='sm:w-full lg:w-11/12 h-auto rounded-2xl flex justify-center'>
                                <div className='w-auto h-auto absolute z-10 font-bold mt-16 sm:gap-y-2'>
                                    <p className='text-4xl'> {weather.name}</p>
                                    <p className='text-lg'> {date} </p>
                                    <p className='text-6xl'> {(weather.main.temp - 273.15).toFixed(1)}˚C</p>
                                    <p className='grid place-items-center text-3xl'> <img className='w-max' src={iconUrl} alt="icon/" /> {weather.weather[0].description} </p>
                                </div>
                                <div className='w-full h-auto relative z-0'>
                                    <img className='sm:11/12 lg:w-full h-auto object-cover rounded-2xl  z-0' src="https://images.pexels.com/photos/1334607/pexels-photo-1334607.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                </div>
                            </div>
                            <div className='flex flex-col sm:justify-center lg:text-start w-11/12 h-auto '>
                                <div className='w-full sm:mt-4 lg:mt-0 sm:mx-2 lg:mx-0'>
                                    <h5 className=''>Max Temperature {(weather.main.temp_max - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Min Temperature {(weather.main.temp_min - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Feels like {(weather.main.feels_like - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Humidity {Math.floor(weather.main.humidity)} %</h5>
                                    <h5 className=''>Wind {Math.floor(weather.wind.speed)} km/h</h5>
                                </div>
                                <hr className='mt-8 w-full h-auto sm:ml-3 lg:ml-0' />
                                <div className='w-full mt-8 sm:ml-2.5 lg:ml-0  sm:mb-2 lg:mb-0 flex gap-4 '>
                                    <h5>
                                        <p>{forecastDate3} h</p>
                                        <p><img src={iconUrl3} alt="icon" className='sm:px-5 lg:px-0' />{forecast.list[1].weather[0].description}</p>
                                        <p>{(forecast.list[1].main.temp - 273.15).toFixed(1)}˚C</p>
                                    </h5>
                                    <h5>
                                        <p>{forecastDate6} h</p>
                                        <p><img src={iconUrl6} alt="icon" className='sm:px-5 lg:px-0' />{forecast.list[2].weather[0].description}</p>
                                        <p>{(forecast.list[2].main.temp - 273.15).toFixed(1)}˚C</p>
                                    </h5>
                                    <h5>
                                        <p>{forecastDate9} h</p>
                                        <p><img src={iconUrl9} alt="icon" className='sm:px-5 lg:px-0' />{forecast.list[3].weather[0].description}</p>
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
