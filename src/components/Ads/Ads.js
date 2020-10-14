import React, {Component} from 'react';
import './Ads.css';
import AdsContainer from './AdsContainer';

class Ads extends Component {
  state = {
    ads: [{
      adTitle: 'Title',
      adDescription: 'description',
      adImageUrl: require('../img/1.jpeg')
    },{
      adTitle: 'Title',
      adDescription: 'description2',
      adImageUrl: require('../img/2.jpeg')
    },{
      adTitle: 'Title',
      adDescription: 'description3',
      adImageUrl: require('../img/3.jpeg')
    }]
    
  }
  render() {
    let myAds = this.state.ads.map((element, i) => {
      return <AdsContainer key={i} val={element}/>
    })
    return(
      <aside className="ads">
        {myAds}
      </aside>
    )
  }
}
export default Ads;