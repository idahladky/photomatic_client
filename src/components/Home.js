import React from "react"

const Home = (props) => {

    const {posts} = props

    const loaded = () => (
        <div className="container">
            <div className="flex">
                {posts.map((post) => (
                    <div>
                        <div className="square">
                            <h1>{post.notes}</h1>
                            <img src={post.image} />
                        </div>
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