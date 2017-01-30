import React, { Component } from 'react';


class Navbar extends Component {
  all(){
    this.props.displayAll();
  }
  online(){
    this.props.displayOnline();
  }
  offline(){
    this.props.displayOffline();
  }
    render(){
      return(
        <div className="navbar">
          <h1 className='title'>
            Twitch Status
          </h1>
            <div className='button_group'>
              <button onClick={this.all.bind(this)} id="all"className='button'>All</button>
              <button onClick={this.online.bind(this)} id="online"className='button'>Online</button>
              <button onClick={this.offline.bind(this)} id="offline"className='button'>Offline</button>
            </div>
        </div>
      );
    }
  }


export default Navbar;
