import React, {Component} from 'react';
import $ from 'jquery'
import App from './../App'

class Channels extends Component {
    render() {
      console.log(this.props.channels)
        return(
          <div>
           <ul className='channel_body'>
               {
                 this.props.channels.map(channel => {
                 return  <li key={channel.id} ref={channel.stream} className='channel'>
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
               }
             </ul>
          </div>
        )
    }
}

export default Channels;
