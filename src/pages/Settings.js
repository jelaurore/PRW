import React, {Component} from './node_modules/react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Ads from '../components/Ads/Ads';

class Settings extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Nav />
        <section>Settings</section>
        <Ads />
      </div>
    )
  }
}
export default Settings;