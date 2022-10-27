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

                    <section className='md:w-1/2 lg:w-2/3 h-auto mx-auto bg-slate-900 text-white rounded-2xl '>
                        <div className='md:flex-row lg:flex'>
                            <div className='w-2/3 h-auto rounded-2xl'>
                                <div className='absolute z-1 font-bold m-8 '>
                                    <h1 className='m-2.5 md:text-4xl lg:text-6xl'> {weather.name} </h1>
                                    <p className='text-lg'> {date} </p>
                                    <h1 className='md:text-4xl lg:text-6xl'> {(weather.main.temp - 273.15).toFixed(1)}˚C</h1>
                                    <p className=' flex place-items-center lg:p-4 md-sm:p-0'> <img src={iconUrl} alt="icon/" /> {weather.weather[0].description} </p>
                                </div>
                                <div className=' md:w-4/5 lg:w-full h-auto'>
                                    <img className='w-full h-auto object-cover rounded-2xl  z-0' src="https://images.pexels.com/photos/1334607/pexels-photo-1334607.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                </div>
                            </div>
                            <div className='flex flex-col md:mt-10 lg:m-10 md:tex-center lg:text-start w-full h-auto'>
                                <div>
                                    <h5 className=''>Max Temperature {(weather.main.temp_max - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Min Temperature {(weather.main.temp_min - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Feels like {(weather.main.feels_like - 273.15).toFixed(1)}˚C</h5>
                                    <h5 className=''>Humidity {Math.floor(weather.main.humidity)} %</h5>
                                    <h5 className=''>Wind {Math.floor(weather.wind.speed)} km/h</h5>
                                </div>
                                <hr className='mt-8 md:w-10/12 lg:w-11/12' />
                                <div className='w-full mt-8 flex md:justify-center lg:gap-10 md:gap-4 md:mx-12 lg:mx-0'>
                                    <h5>
                                        <p>{forecastDate3} h</p>
                                        <p className=''><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                        <p>{(forecast.list[1].main.temp - 273.15).toFixed(1)}˚C</p>
                                    </h5>
                                    <h5>
                                        <p>{forecastDate6} h</p>
                                        <p><img src={iconUrl6} alt="icon" />{forecast.list[2].weather[0].description}</p>
                                        <p>{(forecast.list[2].main.temp - 273.15).toFixed(1)}˚C</p>
                                    </h5>
                                    <h5>
                                        <p>{forecastDate9} h</p>
                                        <p><img src={iconUrl9} alt="icon" />{forecast.list[3].weather[0].description}</p>
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
