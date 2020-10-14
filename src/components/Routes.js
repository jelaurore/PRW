import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NewsFeed from '../pages/NewsFeed';
import Messages from '../pages/Messages';
import Watch from '../pages/Watch';
import Settings from '../pages/Settings';


const Routes = () => {
  return(
    <section>
      <Switch>
        <Route exact path='/' component={NewsFeed}/>
        <Route exact path='/NewsFeed' component={NewsFeed}/>
        <Route exact path='/Messages' component={Messages}/>
        <Route exact path='/Watch' component={Watch}/>
        <Route exact path='/Settings' component={Settings}/>
      </Switch>

    </section>
  )
}
export default Routes;