import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

const Post = ({post, deletePost}) => {
  return (
    <div className="post" >
      <div className="post_header">
      <Avatar 
      className="post_avatar"
      alt='Aaron'
      src="/static/images/avatar/1.jpg"
      >

      </Avatar>
    <h3>{post.username}</h3>
    <button className="deleteBtn" onClick={() => deletePost(post.id)}>X</button>
      </div>
      <img className="post_image" src={post.imageUrl} alt=""/>

    <h4 className="post_text"><strong>{post.username} </strong>{post.caption}</h4>
    </div>
  )
}

export default Post