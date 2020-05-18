import React, {Component} from 'react'

class Searchbar extends Component {
    state = {
        text: ""
    }
    render() {

        const handleChange = e => {
            this.setState({ text: e.target.value })
        }
        const handleSubmit = e => {
            e.preventDefault()
            this.props.performSearch(this.query.value)
            e.currentTarget.reset()
        }
        return (
            <form className="search-form" onSubmit={handleSubmit}>
                <label className="is-hidden" htmlFor="search" >Search</label>
                <input 
                    type="search"
                    name="search"
                    placeholder="Search..."
                    onChange={handleChange}
                    ref={(input) => this.query = input}
                />
            </form>
        )
    }
}

export default Searchbar
