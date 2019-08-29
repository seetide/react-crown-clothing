import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends React.Component {

    renderLinks() {
        let shown = null;
        if(!this.props.authenticated){
            shown = (
                <div>
                    <Link to="/signin">Sign In </Link>
                    <Link to="/signup" >Sign Up </Link>
                </div> 
            );
        } else {
            shown = (
                <div>
                    <Link to="/signout">Sign Out </Link>
                    <Link to="/feature">Feature</Link>
                </div>
            ); 
        }
        return shown;
    }
    render() {
        return (
            <div className="header" >
                
                <Link to="/" >Redux Auth</Link>                
                {this.renderLinks()}
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return { authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps)(Header);