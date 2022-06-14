import React from 'react';
import './AdditionalData';

class AdditionalData extends React.Component {
    render() {
        return(
            <div className="additionalData">
                <div className="col-holder">
                    <div className="col">
                        <div className="card">
                            <div className="cardTitle">
                                <p><span className="icon-temp"></span>feels like</p>    
                            </div>
                            <div className="cardContent">
                                <span className="cardData">{Math.round(this.props.weather.list[0].main.feels_like)}&#176;</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="cardTitle">
                                <p><span className="icon-humidity"></span> humidity</p>    
                            </div>
                            <div className="cardContent">
                                <span className="cardData">{this.props.weather.list[0].main.humidity}%</span>
                            </div>
                        </div>   
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="cardTitle">
                                <p><span className="icon-wind"></span> wind</p>    
                            </div>
                            <div className="cardContent">
                                <span className="cardData">{Math.round(this.props.weather.list[0].wind.speed)}</span>
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
                                <span className="cardData">{this.props.weather.list[0].main.pressure}</span>
                                <span>hPa</span>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        )
    }
}

export default AdditionalData;