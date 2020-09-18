import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const mapStateToProps = state => ({ auth: state.auth });

const actions = { logout };

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />
          <span className='hide-sm'>
            {' '}
            Dashboard
          </span>
        </Link>
      </li>
      <li>
        <a href='#!' onClick={logout}>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'>
            {' '}
            Logout
          </span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li><Link to='/profiles'>Developers</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' />
          {' '}
          DevConnector
        </Link>
      </h1>

      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, actions)(Navbar);
