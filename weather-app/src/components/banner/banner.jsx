import React from 'react';
import QueryResults from "../query/queryresults";
import "../banner/banner.css";

const banner = () => {
  return (
    <div>
        <header className='banner_container'>
             <div className="logo">LOGO HERE</div>
          <div className="input_container">
            <QueryResults />
          </div>
          <div className="light_dark_mode_btn">
            
          </div>
        
        </header>
    </div>
  )
}

export default banner