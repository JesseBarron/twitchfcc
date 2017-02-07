import React, {Component} from 'react';


class Channels extends Component {
  render(){
      const channelList = this.props.currentChannels.map(channel => {
      return  <li key={channel.id} ref={channel.stream} id={channel.stream}>
        <div className="channel_label">
         <a href={channel.url} target="_blank"> <img
          style={{
            width: 90,
            height: 90,
              }}
            src={channel.logo}
            alt=''
          />
          </a>
           <a href={channel.url} target="_blank">
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
           <p id="footnote">{this.props.footnote}</p>
           </ul>
          </div>
        )
    }
}

export default Channels;
