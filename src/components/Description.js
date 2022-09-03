import React from 'react'
import {FaArrowDown,FaArrowUp,FaWind} from 'react-icons/fa';
import './descriptions.css';
import {BiHappy} from 'react-icons/bi';
import {MdCompress,MdOutlineWaterDrop} from 'react-icons/md'
const Description = ({weather,units}) => {
 const tempUnit = units === "metric" ? "°C":"°F"
 const windUnit = units === "metric" ? 'm/s' : 'm/h'

    const cards = [
        {
            id:1,
            icon:<FaArrowDown/>,
            title: "min",
            data:weather.temp_min.toFixed(),
            units:tempUnit,
        },
        {
            id:2,
            icon:<FaArrowUp/>,
            title: "max",
            data:weather.temp_max.toFixed(),
            units:tempUnit,
        },
        {
            id:3,
            icon:<BiHappy/>,
            title: "feels Like",
            data:weather.feels_like.toFixed(),
            units:"hpa",
        },
        {
            id:4,
            icon:<MdCompress/>,
            title: "pressure",
            data:weather.pressure,
            units:tempUnit,
        },
        {
            id:5,
            icon:<MdOutlineWaterDrop/>,
            title: "humidity",
            data:weather.humidity,
            units:"%",
        },
        
        {
            id:6,
            icon:<FaWind/>,
            title: "wind speed",
            data:weather.speed.toFixed(),
            units:windUnit,
        },
       
    ];
  return (
        <div className="section section__descriptions">
         
            {/* cards.map((id,icon,title,data,units) =>{
                <div key={id} className='card'>
                <div className='description__card-icon'>
                      {icon}
                    <small>{title}</small>

                </div>
                <h2>{`${data} ${icon}`} </h2>
            </div>
            }) */}

            {
                cards.map( ({id,icon,title,data,units}) =>(
                  <div key={id} className='card'>
                    <div className='description__card-icon'>
                      {icon}
                      <small>{title}</small>
                    </div>
                    <h2>{`${data} ${units}`}</h2>
                  </div>
                ))
            }
         
            
           
    </div>
  );
};

export default Description