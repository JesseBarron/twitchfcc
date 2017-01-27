import React, { Component } from 'react';
import App from './../App';


class Navbar extends Component {

    render(){
      return(
        <div className="navbar">
          <h1 className='title'>
            Twitch Status
          </h1>
            <div className='button_group'>
              <button /*onClick={this.props.onClick()}*/ id="all"className='button'>All</button>
              <button /*onClick={this.props.onClick()}*/ id="online"className='button'>Online</button>
              <button /*onClick={this.props.onClick()}*/ id="offline"className='button'>Offline</button>
            </div>
        </div>
      );
    }
  }


export default Navbar;
