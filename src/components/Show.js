import React from "react"

const Show = (post) => {

    console.log(post)

    return (
        <div>
            <h1>hello world</h1>
            <h1>notes{post.notes}</h1>
            <h2>author{post.author}</h2>
        </div>
    )
}

export default Show;