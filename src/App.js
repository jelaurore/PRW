import React, {Component} from 'react';
import './App.css';
//import Main from './components/Main';
import Ads from './components/Post/Ads/Ads';
import Post from './components/Post/Post';
//import { FaSearch } from 'react-icons/fa';
import MyForm from './components/myForm/MyForm';

class App extends Component {

  state = {
    posts: [
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

  addPost = (post) => {
    console.log(post)
    // post.id = Math.floor(Math.random())
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

deletePost = (id) => {
  const filteredPost = this.state.posts.filter(post => post.id !== id)
  this.setState({
    posts: filteredPost
  })
  return this.state.posts
}




  render () {

    return (
      <div className="App">

        <div className="app_header">
          <h2 className="app_headerTitle">Facepost</h2>
          <input type="text" placeholder="Search" className="search"></input>
        </div>
          <Ads />
        <h4>News Feed</h4>
        <h4>Messages</h4>
        <h4>Watch</h4>
        <MyForm addPost={this.addPost}/>
        {
          this.state.posts.map((post) => (
            <Post key={post.id} post={post} deletePost={this.deletePost}/>
          ))
        }
        
      </div>
    );
  }
}
export default App;