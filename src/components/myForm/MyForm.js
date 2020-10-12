import React, { Component } from 'react'
import './MyForm.css';
//Answer this question for me.  Why did you use the export on line 4 vs. a Class or Const?
export class MyForm extends Component {

  state = {
    username: "",
    imageUrl:"",
    caption: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state)
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
    )
  }
}

export default MyForm
