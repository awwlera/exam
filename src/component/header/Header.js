import React from 'react';
import './Header';

const dateBuilder = (d) => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`
}


class Header extends React.Component {
  render() {
    return (
      <header className="header">
          <div className="container">
            <div className="logoHolder">
                <a href="/" target="_self" className="logoLink">WeatherApp.</a>
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
      </header>
    )
  }
}

export default Header;
