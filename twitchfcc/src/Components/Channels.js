import React, { Component } from 'react';
import $ from 'jquery'


class Channels extends Component {
  constructor(){
    super();
    this.state={
      freecodecamp : [],
      esl_sc2: [],
      test_channel: []
    }

  }

  getFreeCodeCamp(){
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        if(data.stream){

          this.setState({
            freecodecamp:{
              url: data.stream.channel.url,
              logo: data.stream.channel.logo,
              displayName: data.stream.channel.display_name,
              status: data.stream.channel.status,
              id: data.stream._id
              }}, function(){
            console.log(this.state.freecodecamp);
          })
        }else{
          this.setState({
            freecodecamp:{
              displayName: "FreeCodeCamp",
              status: "Currently Offline.",
              url: "https://www.twitch.tv/freecodecamp"
            }}, function(){
              console.log(this.state.freecodecamp)
            })
        }

      }.bind(this),
    });
  }

  getESL_SC2(){
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/streams/esl_sc2',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        if(data.stream){
          this.setState({
            esl_sc2:{
              url: data.stream.channel.url,
              logo: data.stream.channel.logo,
              displayName: data.stream.channel.display_name,
              status: data.stream.channel.status,
              id: data.stream._id
            }}, function(){
              console.log(this.state.esl_sc2);
            })
        }else{
          this.setState({
            esl_sc2:{
              displayName: "ESL_SC2",
              status: "Currently Offline.",
              url: "https://www.twitch.tv/esl_sc2"
            }}, function(){
              console.log(this.state.esl_sc2);
            })
        }
      }.bind(this)
    })
  }

  getTest_Channel(){
    $.ajax({
      url: 'https://wind-bow.gomix.me/twitch-api/streams/test_channel',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        if(data.stream){
          this.setState({
            test_channel:{
              url: data.stream.channel.url,
              logo: data.stream.channel.logo,
              displayname: data.stream.channel.display_name,
              status: data.stream.channel.status,
              id: data.stream._id
            }}, function(){
              console.log(this.state.test_channel);
            })
        }else{
          this.setState({
            test_channel:{
              displayName: "Test_Channel",
              status: "Currently Offline.",
              url: "https://www.twitch.tv/test_channel"
            }}, function(){
              console.log(this.state.test_channel)
            })

        }
      }.bind(this)
    })
  }
  componentDidMount(){
    this.getFreeCodeCamp();
    this.getESL_SC2();
    this.getTest_Channel();
  }

  render(){

    return(

      <div className='channel_body'>

      </div>

    );
  }
}

export default Channels;
