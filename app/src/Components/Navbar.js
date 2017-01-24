import React, { Component } from 'react';



class Navbar extends Component {

    render(){

      return(
        <div className="navbar">
          <h1 className='title'>
            Twitch Status
          </h1>
            <div className='button_group'>
              <button id="all"className='button'>All</button>
              <button id="online"className='button'>Online</button>
              <button id="offline"className='button'>Offline</button>
            </div>
        </div>
      );
    }
  }


export default Navbar;
