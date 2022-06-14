import React, { Component } from 'react';

class WeekContainer extends Component {
  render() {
    const dailyData = this.props.weather.list.filter(reading => {   
      return reading.dt_txt.includes("15:00:00")}
    );

    return (
      <div className="weekContainer">
        <div className="cardHolder">
          <div className="cardTitle">
            <p><span className="icon-calendar1"></span> 5-day forecast</p>    
          </div>
          <div className="cardContent">
            {dailyData.map((day) => (
              <div className="day">
                <ul className="day-list">
                  <li className="day-item card-day" key={day.dt}>
                    {new Date((day.dt*1000)).toLocaleString("en-US", {weekday: "long"})}
                  </li>
                  <li className="day-item weather-icon" key={day.icon}>
                    <i className={`owf owf-${day.weather[0].id} owf-2x`}></i>   
                  </li>
                  <li className="day-item card-temp" key={day.temp}>
                    <span className="day-temp">{Math.round(day.main.temp)}&#176;</span>
                  </li>
                </ul>
              </div>
            ))}     
          </div>
        </div>
      </div>
    );
  }
}

export default WeekContainer;