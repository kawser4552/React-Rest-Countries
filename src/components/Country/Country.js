import React from 'react';
import './Country.css'


const Country = (props) => {
    console.log(props.country);
    const{area, region, population, name, flags} = props.country;
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h2>Country Name : {name.common}</h2>
            <p>Official Name : {name.official}</p>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
        </div>
    );
};

export default Country;