import React, {Component} from 'react';


class Channels extends Component {
  removeChannel(channel){
    this.props.remove(channel);
  }
    render() {
      console.log(this.props.offlineChannels)

      const channelList = this.props.onlineChannels.map(channel => {
      return  <li key={channel.id} ref={channel.stream} className='channel' onClick={this.removeChannel.bind(this, channel, channel.stream)}>
        <div className="channel_label">
         <a href={channel.url} target="_blank"> <img
          style={{
            width: 90,
            height: 90,
              }}
            src={channel.logo}
            alt=''
          />
          <h3>
            {channel.name}
          </h3>
        </a>
      </div>
          <p>
        {channel.status}
          </p>
        </li>
      })

        return(
          <div>
           <ul className='channel_body'>
             {channelList}
           </ul>
          </div>
        )
    }
}

export default Channels;
