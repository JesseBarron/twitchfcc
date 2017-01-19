import React, { Component } from 'react';



class Navbar extends Component {

    render(){

      return(
        <div className="navbar">
          <div className='title'>
            Twitch Status
            <div className='button'>
              <button className='all'>All</button>
              <button className='online'>Online</button>
              <button className='offline'>Offline</button>
            </div>
          </div>
        </div>
      );
    }
  }


export default Navbar;
