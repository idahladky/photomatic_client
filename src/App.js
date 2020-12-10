import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom"

function App() {

  const url = "https://localhost:3000"
  // const url = "heroku url"
  const [posts, setPosts] = React.useState([]) // store API data, initialize empty array

  // empty post
  const emptyPost = {
    image: "",
    notes: "",
    author: ""
  }

  // CRUD

  // Update //
  const [selectedPost, setSelectedPost] = React.useState(emptyPost)

  const handleUpdate = (post) => {
    fetch(`${url}/photo_posts/${post.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
    .then(response => getPosts())
  }

  const selectPost = (post) => {
    setSelectedPost(post)
  }
  
  // Read //
  const getPosts = () => {
    fetch(`${url}/photo_posts/`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPosts(data)
    })
  }

  React.useEffect(() => {
    getPosts()
  }, [])

  // Create //
  const handleCreate = (newPost) => {
    fetch(`${url}/photo_posts/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    }).then(response => {
      getPosts()
    })
  }

  // Delete //
  const deletePost = (post) => {
    fetch(`${url}/photo_posts/${post.id}`, {
      method: "delete",
    })
    .then(response => getPosts())
  }


  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
