import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, foreCast }) => {

    if (loadingData) {
        return < Spinner />
    }

    return (
        <h1></h1>
    )
}

export default Card;