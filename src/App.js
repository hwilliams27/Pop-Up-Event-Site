import React, {Component} from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import SocialMedia from './components/social';
import Footer from './components/header_footer/Footer';
import ScrollToTop from 'react-scroll-to-top';

class App extends Component {
  render(){
    return(
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venueNfo">
          <VenueNfo/>
        </Element>

        <Element name="highlights">
          <Highlight/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <Element name="social">
          <SocialMedia/>
        </Element>
        
        <ScrollToTop smooth/>
        <Footer/>
      </div>
    );
  }
}

export default App;