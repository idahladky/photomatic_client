import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Switch, Link } from "react-router-dom"
import Home from "./components/Home"
import Show from "./components/Show"
import Form from "./components/Form"

function App() {

  // const url = "http://localhost:3000"
  const url = "http://thephotomaticapi.herokuapp.com"
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
    .then((response) => getPosts())
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
    }).then((response) => {
      getPosts()
    })
  }

  // Delete //
  const deletePost = (post) => {
    fetch(`${url}/photo_posts/${post.id}`, {
      method: "delete"
    })
    .then((response) => getPosts())
  }


  return (
    <div>
      <nav>
        <div className="nav-container">
          <h1>Photomatic</h1>
          <Link to="/photo_posts/new"><button>New Post</button></Link>
        </div>
      </nav>

      <main>
        <Switch>
          <Route exact path="/photo_posts" render={(rp) => <Home {...rp} posts={posts} selectPost={selectPost} />} />
          <Route exact path="/photo_posts/new" render={(rp) => <Form {...rp} label="create" posts={posts} selectPost={selectPost} post={emptyPost} handleSubmit={handleCreate} />} />
          <Route exact path="/photo_posts/:id/edit" render={(rp) => <Form {...rp} label="update" post={selectedPost} handleSubmit={handleUpdate} />} />
          <Route exact path="/photo_posts/:id" render={(rp) => <Show {...rp} post={selectedPost} selectPost={selectPost} deletePost={deletePost}/>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

// selectPost={selectPost} deletePost={deletePost}
