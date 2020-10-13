import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      { loading
        ? <Spinner />
        : (
          <>
            <h1 className='large text-primary'>Developers</h1>
            <div className='lead'>
              <i className='fab fa-connectdevelop' />
              {' '}
              Browse and connect with developers
              <div className='profiles'>
                { profiles.length > 0 ? (
                  profiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                ) : <h4>No Profiles Found</h4>}
              </div>
            </div>
          </>
        )}
    </>
  );
};

Profiles.propTypes = {
  profile: PropTypes.shape({
    profiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ profile: state.profile });

export default connect(mapStateToProps, { getProfiles })(Profiles);
