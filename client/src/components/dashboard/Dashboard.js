import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

const actions = { getCurrentProfile };

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <div>Dashboard</div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.shape({ isAuthenticated: PropTypes.bool.isRequired }).isRequired,
  profile: PropTypes.shape({ profile: PropTypes.shape({}) }).isRequired,
};

export default connect(mapStateToProps, actions)(Dashboard);
