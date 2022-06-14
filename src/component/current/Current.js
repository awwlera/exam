import React from 'react';
import './Current';

class Current extends React.Component {
    state = {
        latitude: null,
        longitude: null,
        mainData: null,
        city: null,
        temp: null,
        iconID: null,
        weatherName: null,
        feelsLike: null,
        humidity: null,
        wind: null,
        pressure: null,
    }

    componentDidMount() {
        if(navigator.geolocation){
          this.getPostions()
        .then((position) => {
          this.getWeather(position.coords.latitude,position.coords.longitude)
        })
        }
    }

    getPostions = () => {
        return new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    getWeather = async (latitude, longitude) => {
        const api = {
            key: "7d71ea796959585356d0087f465a431c",
            base: "https://api.openweathermap.org/data/2.5/"
        }
        const query = await fetch(
          `${api.base}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
        );
        const data = await query.json();
        this.setState(
            {
                mainData: data,
                city: data.city.name,
                temp: Math.round(data.list[0].main.temp),
                iconID: data.list[0].weather[0].id,
                weatherName: data.list[0].weather[0].main,
                feelsLike: Math.round(data.list[0].main.feels_like),
                humidity: data.list[0].main.humidity,
                wind: Math.round(data.list[0].wind.speed),
                pressure: data.list[0].main.pressure,
            }
        )   
    }

    render() {
        return (
            <div className="currentWeather">
                <div className="mainInfo">
                    <p className="cityName">{this.state.city}</p>
                    <p className="temp">{Math.round(this.state.temp)}&#176;</p>
                    <i className={`owf owf-${this.state.iconID} owf-5x`}></i>
                    <p className="weather">{this.state.weatherName}</p>
                </div>
                <div className="additionalData">
                    <div className="col-holder">
                        <div className="col">
                            <div className="card">
                                <div className="cardTitle">
                                    <p><span className="icon-temp"></span>feels like</p>    
                                </div>
                                <div className="cardContent">
                                    <span className="cardData">{this.state.feelsLike}&#176;</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="cardTitle">
                                    <p><span className="icon-humidity"></span> humidity</p>    
                                </div>
                                <div className="cardContent">
                                    <span className="cardData">{this.state.humidity}%</span>
                                </div>
                            </div>   
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="cardTitle">
                                    <p><span className="icon-wind"></span> wind</p>    
                                </div>
                                <div className="cardContent">
                                    <span className="cardData">{this.state.wind}</span>
                                    <span>km/h</span>
                                </div>
                            </div>   
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="cardTitle">
                                    <p><span className="icon-pressure"></span> pressure</p>    
                                </div>
                                <div className="cardContent">
                                    <span className="cardData">{this.state.pressure}</span>
                                    <span>hPa</span>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Current;