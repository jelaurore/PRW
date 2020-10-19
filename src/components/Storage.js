import React, {Component} from 'react';

export class Storage extends Component {
  documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: '',
            caption: '',
            imageUrl: ''
        }
    }

handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleSubmit(e) {
    e.preventDefault()
  localStorage.setItem('document',JSON.stringify(this.state));
}

// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));

    if (localStorage.getItem('document')) {
        this.setState({
          username: this.documentData.username,
          caption: this.documentData.caption,
          imageUrl: this.documentData.imageUrl
    })
} else {
    this.setState({
        username: '',
        caption: '',
        imageUrl: ''
    })
}
}

render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
      <input type="text" name="username" placeholder="please enter username"  onChange={this.handleChange}/>
      <input type="text" name="imageUrl" placeholder="please enter image url"  onChange={this.handleChange}/>
      <textarea required name="caption" cols="40" rows="4" placeholder="Write your caption"  onChange={this.handleChange}/>
      <button type="submit"> 
        Post
      </button>
  </form>
    );
}
}
export default Storage;