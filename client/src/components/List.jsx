import React, {Component, Fragment} from 'react'
import Chirp from './Chirp'

// this allows me to map through the list of chirps//
class List extends Component {
    render() {
        return (
           <Fragment>
                {this.props.chirps.map((chirp) => {
                    return (
                        <Chirp key={chirp.id} post = {chirp}/>
                    );
                })}
           </Fragment> 
        );
    }
} export default List