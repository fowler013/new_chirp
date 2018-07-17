import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: '',
            scrollingLock: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

   

// When the user clicks on the button, scroll to the top of the document
topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    handleInputChange(blog) {
        this.setState({ blog });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

        if (window.scrollY > 100) {
            console.log("should lock");
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 100) {
            console.log("not locked");
            this.setState({
                scrollingLock: false
            });
        }

    }

    render() {
        return (
            <div className=" position-sticky sticky-top bg-white pt-3 pb-3" >
                <nav className="navbar navbar-light formNav btn-light" style={{ position: this.state.scrollingLock ? "fixed" : "relative" }}>
                    <a className="navbar-brand" href="#" className="navbar-brand text-dark">
                        <img src="https://cdn.mos.cms.futurecdn.net/3kGmfXxJGC9Q2PMbMCpzYZ.jpg" width="60" height= "40" className="d-inline-block align-top rounded-circle" alt=""onClick={ () => { this.topFunction() } } />
                    </a> <Link className="navbar-brand text-dark cardFont" to="/">  Chirpr </Link>
                    
                    

                    <form className="form-inline ml-auto"><Link className="navbar-brand text-dark cardFont" to="/:about">  About </Link>
                        <div className="md-form my-0">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                     </div>
                            <button href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
                    </form>


                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">



                            </div>
                        </div>
                </nav>
            </div>


                );
            };
        }
export default Nav;