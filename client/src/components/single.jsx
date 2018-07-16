import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BlogForm from './blogForm';

//this is where I would update 1 chirp//

class Single extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {}
        };
    }

    componentDidMount() {
        this.getChirp();
    }

    getChirp() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            }).then((chirp) => {
                console.log(blog);

                this.setState({
                    chirp: chirp
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    updateChirp(post) {
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.setState({
                blog: post
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteBlog() {
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            this.props.history.push('/');

        }).catch((err) => {
            console.log(err);
        });
    }




    render() {
        let post = this.state.chirp;
        return (
            <div>
                <div className="card m-3 bg-light cardFont float" style = {{ width:" 550px"}}>
                    <div className="card-body text-left">
                   
                        <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} User:
                </label>
                        <h3 className="card-text">
                            {post.user}
                        </h3>
                        <label
                    htmlFor="title-input"
                    className="d-block m-2">{this.props.action} Text:
                </label>
                        <h5 className="card-text">
                            {post.text}
                        </h5>
                    </div>
                </div>


                <div className="container" style = {{ width:" 250px"}}>
                    <div key={this.state.chirp.id} className="card m-1 deleteContainer">
                        <div className="card-body text-left">

                        </div>
                        <button type="button" className="btn btn-dark btn-lg btn-block cardFont" onClick={() => { this.deleteChirp(); }}>DELETE</button>

                    </div >
                </div>
                <div className="container" style = {{ width:" 550px"}} >
                    <BlogForm action="Update" postChirp={(post) => { this.updateChirp (post); }} />
                </div>
                
            </div>

        )


    };
}


export default Single;