import React, { Component, Fragment } from 'react' // this allows me to use Component//
import ChirpForm from './ChirpForm';
import List from './List'

class chirps extends Component {
    constructor(props) {
        super(props);

        this.state = { // remember that states are different from props since states can change//
            //this is were the new chirps will go//
            chirps:[]
        };
    }

    componentDidMount() {
        this.getChirps(); // this is a method//
    }

    getChirps() {
        fetch('/api/chirps/')
            .then((response) => {
                return response.json();
            }).then((chirps) => {
                console.log(chirps);

                this.setState({
                    chirps: chirps
                });
            }).catch((err) => {
                console.log(err);
            });
    }


    //this is were the chirps are added//
    addChirp(post) {
        console.log(post);
        fetch("/api/chirps/", {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(post)
        }).then(() => {
            this.getChirps();
        }).catch((err) => {
            console.log(err)
        });
    }


    render() {
        return (
            <div className="container">
                <ChirpForm action="Create" postChirp={(post) => { this.addChirp(post); }} />
                <List chirps={this.state.chirps} />
            </div>
        );
    }
}

export default chirps;

