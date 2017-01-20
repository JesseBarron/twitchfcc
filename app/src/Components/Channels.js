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
          $.ajax({
            url: "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp",
            type: 'GET',
            dataType: 'json',
            success: function(data){
              this.setState({
                freecodecamp:{
                  displayName: data.display_name,
                  status: "Currently Offline.",
                  logo: data.logo,
                  url: data.url,
                  id: data._id
                }}, function(){
                  console.log(this.state.freecodecamp);
                })

            }.bind(this)
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
    let  streamUrl = ["https://wind-bow.gomix.me/twitch-api/streams/freecodecamp","https://wind-bow.gomix.me/twitch-api/streams/esl_sc2","https://wind-bow.gomix.me/twitch-api/streams/test_channel"];
    let channelUrl = ["https://wind-bow.gomix.me/twitch-api/channels/freecodecamp","https://wind-bow.gomix.me/twitch-api/channels/esl_sc2","https://wind-bow.gomix.me/twitch-api/channels/test_channel"];
    let names=["FreeCodeCamp","ESL_SC2","Test_Channel"];

  for(var x = 0, len = streamUrl.length; k < len; k++){
    $.ajax({
      url: streamUrl[x],
      type: 'GET',
      dataType: 'json',
      success: function(data){
        if(data.stream){
          const streamData = {data.stream.channel.display_name : {
              url: data.stream.channel.url,
              logo: data.stream.channel.logo,
              displayname: data.stream.channel.display_name,
              status: data.stream.channel.status,
              id: data.stream._id
            }};
          this.setState({streamData}, function(){console.log(this.state.test_channel);});
        }else{
          $.ajax({
            url: channelUrl[x],
            type: 'GET',
            dataType: 'json',
            success: function(data){

              this.setState({
                  {names[x]}: {
                  displayName: data.display_name,
                  url: data.url,
                  logo: data.logo,
                  status: "Currently Offline."
                }
              }, function(){console.log(this.state);})
            }.bind(this)
          })
        }
      }.bind(this)
    })
  }
}
  componentDidMount(){
  //  this.getFreeCodeCamp();
//    this.getESL_SC2();
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
