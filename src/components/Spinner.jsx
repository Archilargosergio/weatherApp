import React from 'react';
import '../styles/Spinner.css';

const Spinner = () => {
    return (
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner;