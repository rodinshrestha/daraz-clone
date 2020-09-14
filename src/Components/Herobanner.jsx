import React from 'react'
import "./Styles/Herobanner.css";
import Productscatagorieslist from './Productscatagorieslist';
import Imagesilder from './Imagesilder';

const Herobanner = () => {
    return (
        <div className="hero-container">
        <div className="hero-content">
          <Productscatagorieslist />

          
          
          
          <div className="imagesilder">
            <Imagesilder />
          </div>
        </div>
      </div>
    )
}

export default Herobanner
