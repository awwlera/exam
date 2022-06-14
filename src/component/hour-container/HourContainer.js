import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import './HourContainer';

class HourContainer extends Component {
  render() {
    const copyWeather = [].concat(this.props.weather.list);
    const hourData = copyWeather.splice(0,9);

    return (
      <div className="hourContainer">             
        <div className="cardHolder">
          <div className="cardTitle">
              <p><span className="icon-clock"></span> hourly forecast</p>
          </div>
          <div className="cardContent">
            <>
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              className="swiper"
            >
              {hourData.map((hour) => (
                <SwiperSlide>
                  <ul className="hour-list">
                    <li className="hour-item time" key={hour.dt}>
                      {new Date((hour.dt*1000)).toLocaleString("en-US", {hour: "numeric"})}
                    </li>
                    <li className="hour-item weather-icon" key={hour.icon}>
                      <i key={hour.id} className={`owf owf-${hour.weather[0].id} owf-2x`}></i>    
                    </li>
                    <li className="hour-item card-temp" key={hour.temp}>
                      <span key={hour.main.temp} className="hour-temp">{Math.round(hour.main.temp)}&#176;</span>
                    </li>
                  </ul>
                </SwiperSlide>
              ))}    
            </Swiper>
            </>
          </div>
        </div>
      </div>
    );
  }
}
  
export default HourContainer;