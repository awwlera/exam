import React from 'react';
import './Footer';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="linkHolder">
            <ul className="footerList">
              <li className="footerList-item">
                <a href="/" className="footerLink">Contact Support</a>  
              </li>
              <li className="footerList-item">
                Made with <a href="https://openweathermap.org/" className="footerLink">Open Weather</a> 
              </li>
            </ul>
            <span>WeatherApp.&copy; 2022</span>
          </div>
        </div>
      </footer>
    )
  }
}
  
export default Footer;