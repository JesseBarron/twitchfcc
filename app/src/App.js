import React, { Component } from 'react';
import $ from 'jquery'
import './App.css';
import Navbar from './Components/Navbar.js'
import Channels from './Components/Channels'


class App extends Component {
  constructor() {
      super();
      this.state = {
          channels: []
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
                  this.setState({channels: this.state.channels.concat(freeCodeCamp)})

              } else {
                  $.ajax({
                      url: "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp",
                      type: 'GET',
                      dataType: 'json',
                      success: function(data) {
                          var freeCodeCamp = {
                              name: data.display_name,
                              status: "Currently Offline.",
                              strem: null,
                              logo: data.logo,
                              url: data.url,
                              id: data._id
                          }
                          this.setState({channels: this.state.channels.concat(freeCodeCamp)})
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
                  this.setState({channels: this.state.channels.concat(esl_sc2)})
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
                          this.setState({channels: this.state.channels.concat(esl_sc2)})
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
                      this.setState({channels: this.state.channels.concat(test_channel)})
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
                          this.setState({channels: this.state.channels.concat(test_channel)})
                          console.log(this.state);
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
  render() {
    return (
      <div className="App">
        <Navbar />
        <Channels channel={this.state}/>
      </div>
    );
  }
}

export default App;
