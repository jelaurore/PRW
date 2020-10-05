import React, {Component} from 'react';

export default class Exports extends Component {
  render() {
    return (
      <div className="App">
        <h1>Why do we use export?</h1>
        <p>Export are like the root file. If you are looking to 
          export multiple components from a single file the 
          declaration should be export.
        </p>
      </div>
    )
  }
}