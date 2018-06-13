import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/logo-amex-1.png'

const Header = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <Link to="/">
          <img className="navbar-brand" src={logo} alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* <li className={(props.routing.pathname !== "/") ? 'nav-item' : 'nav-item active'}>
              <Link className="nav-link" to="/">Home</Link>
            </li> */}
            <li className={(props.routing.pathname !== "/tags") ? 'nav-item' : 'nav-item active'}>
              <Link className="nav-link" to="/tags"> Tags</Link>
            </li>
          </ul>
        </div>

        <form className="form-inline mr-auto">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" />
          <button className="btn btn-light my-2 my-sm-0" type="submit">Submit</button>
        </form>

      </nav>
    </header>
  )
}

const mapStateToProps = state => ({
  routing: state.routing.location
});

export default connect(mapStateToProps)(Header);