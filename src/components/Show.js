import React from "react"
import { Link } from "react-router-dom"

const Show = (props) => {

    const { post } = props

    console.log(post)

    return (
        <div className="show-container">
            <div className="square">
                <img src={require("../images/River_reflection.jpg")}/>
            </div>
            <div className="col-6">
                <p>notes{post.notes}</p>
                <h2>author{post.author}</h2>
                <div>
                    <button onClick={() => {
                        props.selectPost(post)
                        props.history.push(`/photo_posts/${post.id}/edit`)
                    }}>
                        Edit
                    </button>
                    <button onClick={() => {
                        props.deletePost(post)
                        props.history.push("/photo_posts")
                    }}>
                        Delete
                    </button>
                    <Link to={`/photo_posts`}><button >Home</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Show;