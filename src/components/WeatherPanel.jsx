/* eslint-disable no-throw-literal */
import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=2959820bf221d83ce918c684bdc9098a&lang=en';
    let urlForeCast = 'https://api.openweathermap.org/data/2.5/forecast?appid=2959820bf221d83ce918c684bdc9098a&lang=en';
    let urlCity = '&q= ';

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useState('');

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //weather

        urlWeather += urlCity + loc;

        await fetch(urlWeather).then((response) => {
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);

        }).catch(error => {
            console.error(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        urlForeCast += urlCity + loc;

        await fetch(urlForeCast).then((response) => {
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.error(error);
            setLoading(false);
            setShow(false);
        });


    }


    return (

        <React.Fragment>

            <Form
                newLocation={getLocation}
            />

            <Card
                showData={show}
                loadingData={loading}
                weather={weather}
                forecast={forecast}
            />


        </React.Fragment>

    );
}

export default WeatherPanel;