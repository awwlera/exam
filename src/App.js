import React from 'react';
import './App.scss';
import Header from './component/header/Header';
import Search from './component/search/Search';
import Footer from './component/footer/Footer';


class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <div className="container">
            <Search />
          </div>
        </main> 
        <Footer />
      </div>
    )
  } 
}

export default App;

