import React, {Component} from 'react';
import './Ads.css';
import AdsContainer from './AdsContainer';

class Ads extends Component {
  state = {
    ads: [{
      adTitle: 'Title',
      adDescription: 'description',
      //adImageUrl: require('./images/1.jpg')
    },{
      adTitle: 'Title',
      adDescription: 'description2',
      //adImageUrl: require('./images/1.jpg')
    },{
      adTitle: 'Title',
      adDescription: 'description3',
      //adImageUrl: require('./images/1.jpg')
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