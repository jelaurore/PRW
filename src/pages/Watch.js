import React, {Component} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Ads from '../components/Ads/Ads';

class Watch extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Nav />
        <section>Watch</section>
        <Ads />
      </div>
    )
  }
}
export default Watch;