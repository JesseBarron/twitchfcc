import React, {Component} from 'react';
import App from './../App'


class Channels extends Component {
  removeChannel(stream){
    this.props.onRemove(stream);
  }
    render() {
      console.log(this.props.channels)

      const channelList = this.props.channels.map(channel => {
      return  <li key={channel.id} ref={channel.stream} className='channel' onClick={this.removeChannel.bind(this, channel.stream)}>
        <div className="channel_label">
         <a href={channel.url} target="_blank"> <img
          style={{
            width: 70,
            height: 70,
              }}
            src={channel.logo}
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
