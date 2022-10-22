/* eslint-disable no-throw-literal */
import React, { useState } from 'react';
import Form from '../components/Form';

const WeatherPanel = () => {
    let urlWheater = 'https://api.openweathermap.org/data/2.5/weather?appid=2959820bf221d83ce918c684bdc9098a';
    let urlForeCast = 'https://api.openweathermap.org/data/2.5/forecast?appid=2959820bf221d83ce918c684bdc9098a';
    let urlCity = '&q=';

    const [weather, setWeather] = useState([]);
    const [forecast, setForeCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //weather

        urlWheater += urlCity + loc;

        await fetch(urlWheater).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData.data);
            setWeather(weatherData.data);
            setLoading(false);
            setShow(true);
        }).catch(error => {
            console.error(error);
            setLoading(false)
            setShow(false);
        });

        //foreCast

        urlForeCast += urlCity + loc;

        await fetch(urlForeCast).then((response) => {
            if (!response.ok) throw { response };
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData.data);
            setForeCast(forecastData.data);
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
            < Form
                newLocation={getLocation}
            />
        </React.Fragment>
    )
}

export default WeatherPanel;