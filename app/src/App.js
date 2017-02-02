import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';
import Navbar from './Components/Navbar'
import Channels from './Components/Channels'


class App extends Component {
  constructor() {
      super();
      this.state = {
          currentChannels: [],
          allChannels: [],
          onlineChannels: [],
          offlineChannels: [],

      }
  }

  getFreeCodeCamp() {
      $.ajax({
          url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp',
          type: 'GET',
          dataType: 'json',
          success: function(data) {
              if (data.stream) {
                  var freeCodeCamp = {
                      url: data.stream.channel.url,
                      logo: data.stream.channel.logo,
                      name: data.stream.channel.display_name,
                      status: data.stream.channel.status,
                      id: data.stream._id
                  };
                  this.setState({currentChannels: this.state.currentChannels.concat(freeCodeCamp)})
                  this.setState({allChannels: this.state.allChannels.concat(freeCodeCamp)})
                  this.setState({onlineChannels: this.state.onlineChannels.concat(freeCodeCamp)})
              } else {
                  $.ajax({
                      url: "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp",
                      type: 'GET',
                      dataType: 'json',
                      success: function(data) {
                          var freeCodeCamp = {
                              name: data.display_name,
                              status: "Currently Offline.",
                              stream: null,
                              logo: data.logo,
                              url: data.url,
                              id: data._id
                          }
                          this.setState({currentChannels: this.state.currentChannels.concat(freeCodeCamp)})
                          this.setState({allChannels: this.state.allChannels.concat(freeCodeCamp)})
                          this.setState({offlineChannels: this.state.offlineChannels.concat(freeCodeCamp)})
                      }.bind(this)
                  })
              }
          }.bind(this)
      });
  }

  getESL_SC2() {
      $.ajax({
          url: 'https://wind-bow.gomix.me/twitch-api/streams/esl_sc2',
          type: 'GET',
          dataType: 'json',
          success: function(data) {
              if (data.stream) {
                  var esl_sc2 = {
                      url: data.stream.channel.url,
                      logo: data.stream.channel.logo,
                      name: data.stream.channel.display_name,
                      status: data.stream.channel.status,
                      id: data.stream._id
                  }
                  this.setState({currentChannels: this.state.currentChannels.concat(esl_sc2)})
                  this.setState({allChannels: this.state.allChannels.concat(esl_sc2)})
                  this.setState({onlineChannels: this.state.onlineChannels.concat(esl_sc2)})
              } else {
                  $.ajax({
                      url: 'https://wind-bow.gomix.me/twitch-api/channels/esl_sc2',
                      type: 'GET',
                      dataType: 'json',
                      success: function(data) {
                          var esl_sc2 = {
                              name: data.display_name,
                              status: "Currently Offline.",
                              stream: null,
                              logo: data.logo,
                              url: data.url,
                              id: data._id
                          }
                          this.setState({currentChannels: this.state.currentChannels.concat(esl_sc2)})
                          this.setState({allChannels: this.state.allChannels.concat(esl_sc2)})
                          this.setState({offlineChannels: this.state.offlineChannels.concat(esl_sc2)})
                      }.bind(this)

                  })
              }
          }.bind(this)
      })
  }

  getTest_Channel() {
      $.ajax({
          url: "https://wind-bow.gomix.me/twitch-api/streams/test_channel",
          type: 'GET',
          dataType: 'json',
          success: function(data) {
              if (data.stream) {
                    var  test_channel={
                          url: data.stream.channel.url,
                          logo: data.stream.channel.logo,
                          name: data.stream.channel.display_name,
                          status: data.stream.channel.status,
                          id: data.stream._id
                      }
                      this.setState({currentChannels: this.state.currentChannels.concat(test_channel)})
                      this.setState({allChannels: this.state.allChannels.concat(test_channel)})
                      this.setState({onlineChannels: this.state.onlineChannels.concat(test_channel)})
              } else {
                  $.ajax({
                      url: "https://wind-bow.gomix.me/twitch-api/channels/test_channel",
                      type: 'GET',
                      dataType: 'json',
                      success: function(data) {
                            var  test_channel= {
                                  name: data.display_name,
                                  url: data.url,
                                  logo: data.logo,
                                  status: "Currently Offline.",
                                  stream: null,
                                  id: data._id
                                }
                                this.setState({currentChannels: this.state.currentChannels.concat(test_channel)})
                                this.setState({allChannels: this.state.allChannels.concat(test_channel)})
                                this.setState({offlineChannels: this.state.offlineChannels.concat(test_channel)})
                      }.bind(this)
                  })
              }
          }.bind(this)
      })
  }

  componentDidMount() {
        this.getFreeCodeCamp();
        this.getESL_SC2();
        this.getTest_Channel();

      }

  showOnline(){
    this.setState({currentChannels: this.state.onlineChannels})
  };

  showOffline(){
    this.setState({currentChannels: this.state.offlineChannels})
  };

  showAll(){
    this.setState({currentChannels: this.state.allChannels})
  };


  render(){
    return (
      <div className="App">
        <Navbar
          channels={this.state.channels}
          displayOnline={this.showOnline.bind(this)}
          displayOffline={this.showOffline.bind(this)}
          displayAll={this.showAll.bind(this)}/>
        <Channels
          currentChannels={this.state.currentChannels}/>
      </div>
    );
  }
}

export default App;
