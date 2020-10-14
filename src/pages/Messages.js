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
        caption:"Beatufil image from above planet mars",
        imageUrl:"https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80"
      },
      {
        id:2,
        username:"Sheila",
        caption:"Beatufil image from above",
        imageUrl:"https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      },
      {
        id:3,
        username:"Alicia",
        caption:"Beatufil image",
        imageUrl:"https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80"
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