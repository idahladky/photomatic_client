import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom"
import { getHeapCodeStatistics } from 'v8';

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
  
  // Read //

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


  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
