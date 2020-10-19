import React, {Component} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Ads from '../components/Ads/Ads';


class Messages extends Component {
  state = {
    messages: [
      {
        id: 1,
        username:"aaron", 
        message:"Beatifil image from above planet mars",
        date:"Jan 9",
        time:"9:01 AM"
      },
      {
        id:2,
        message:"Yes indeed!",
        date:"Jan 6",
        time:"7:01 AM"
      },
      {
        id:3,
        message:"Lol",
        date:"Jan 2",
        time:"8:01 AM"
      }
    ]
  }

  render() {
    return(
      <div>
        <Header/>
        <Nav />
        <section>Messages</section>
        <Ads />
      </div>
    )
  }
}
export default Messages;