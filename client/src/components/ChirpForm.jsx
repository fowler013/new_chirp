import React, { Component } from 'react';
import { render } from 'react-dom';

class ChirpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            text: ''
        };
    }

    handleInputChange(user) {
        this.setState({ user });
    }

    handleContentChange(text) {
        this.setState({ text });
    }

    render() {
        return (
            <form className="card p-3 m-1 formContainer" >
                <label
                    htmlFor="title-input"
                    className="d-block m-2 text-dark cardFont">{this.props.action} post:
                </label>
               
                <input
                    value={this.state.user}
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline formTitle cardFont"
                    placeholder="User"
                />
                <div className="form-group">
                    <textarea value={this.state.text}
                 onChange={(event) => { this.handleContentChange(event.target.value) }}
                 className="form-control w-70 m-2 d-inline bg-light formContent cardFont"
                 placeholder="Chirp about it"></textarea>
                </div>
                
                <button
                    onClick={() => { this.props.postChirp(this.state) }}
                    type="button"
                    className="btn btn-dark text secondary m-2 cardFont">Post chirp!
                </button>
            </form>
        );
    }
}

export default ChirpForm;