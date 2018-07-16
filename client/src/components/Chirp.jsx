import React from 'react'
import { Link } from 'react-router-dom';

const Chirp = (props) => {
    return (
        
        <div className="card m-1 bg-light float-right"style = {{ width:" 250px"}} >
            <div className="card-body text-left cardFont" >
            New Chirp:
            <h2 className="card-text ">
                    
                </h2>
                User:
                <h3 className="card-text">
                    {props.post.user}
                </h3>Text:
                <h5 className="card-text">
                    {props.post.text}
                </h5>


                <Link to={`/${props.post.id}`} className="btn btn-secondary btn-sm"> Update</Link>
               

            </div>
        </div>
    );
};

export default Chirp;