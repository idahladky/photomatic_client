import React from "react"
import { Link } from "react-router-dom"

const Form = (props) => {
    const [formData, setFormData] = React.useState(props.post)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/photo_posts")
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="field-wrap">
                <label>Picture:</label><input
                    type="text"
                    name="image"
                    // value={formData.image}
                    onChange={handleChange}
                />
            </div>
            <div className="field-wrap">
                <label>Notes:</label><input
                    type="textarea"
                    rows="10"
                    wrap="soft"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                />
            </div>
            <div className="field-wrap">
                <label>Author:</label><input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value={props.label} />
        </form>

        <Link to="/photo_posts"><button>Home</button></Link>
        </>
    )
}

export default Form