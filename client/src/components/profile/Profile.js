import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  match: { params },
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(params.id);
  }, [getProfileById]);

  return (
    <>
      {profile === null || loading
        ? <Spinner />
        : (
          <>
            <Link to='/profiles' className='btn btn-light'>Back To Profiles</Link>

            {auth.isAuthenticated
            && auth.loading === false
            && auth.user._id === profile.user._id
            && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit profile
              </Link>
            )}
          </>
        )}
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    profile: PropTypes.shape({ user: PropTypes.shape({ _id: PropTypes.string.isRequired }) }),
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
  auth: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({ _id: PropTypes.string.isRequired }),
  }).isRequired,
  getProfileById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
