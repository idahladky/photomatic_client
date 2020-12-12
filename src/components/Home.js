import React from "react"

const Home = (props) => {

    const {posts} = props

    const loaded = () => (
        <div className="container">
            <div className="index-show">
                {posts.map((post) => (
                    <div className="square" onClick={() => {
                        props.selectPost(post)
                        props.history.push(`/photo_posts/${post.id}`)}}>
                        <img src={require("../images/River_reflection.jpg")} />
                        <p>{post.notes}</p>
                    </div>
                ))}
            </div>
            <div className="filling-empty-space-childs"></div>
        </div>
    )

    const loading = <h1>Loading...</h1>

    return posts.length > 0 ? loaded() : loading
}

export default Home