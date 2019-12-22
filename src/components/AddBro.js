import React, {Component} from "react";

class AddBro extends Component{
    state = {
        name: "",
        username: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBro(this.state);
        this.setState({
            name: "",
            username: ""
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="username" onChange={this.handleChange} value={this.state.username}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBro;