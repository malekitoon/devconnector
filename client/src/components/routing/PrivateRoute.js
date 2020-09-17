import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = state => ({ auth: state.auth });

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
  <Route
    {...rest}
    render={props => (!isAuthenticated && !loading
      ? (<Redirect to='/login' />)
      : (<Component {...props} />))}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);
