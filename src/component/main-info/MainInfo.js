import React, { Component } from 'react';
import '../../App';

class MainInfo extends Component {
    render() {
        return(
            <div className="mainInfo">
                <p className="cityName">{this.props.weather.city.name}</p>
                <p className="temp">{Math.round(this.props.weather.list[0].main.temp)}&#176;</p>
                <i className={`owf owf-${this.props.weather.list[0].weather[0].id} owf-5x`}></i>
                <p className="weather">{this.props.weather.list[0].weather[0].main}</p>
            </div>
        )
    }
}

export default MainInfo;