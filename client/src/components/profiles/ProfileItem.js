import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => (
  <div className='profile bg-light'>
    <img src={avatar} className='round-img' alt='' />
    <div>
      <h2>{name}</h2>
      <p>
        {status}
        {' '}
        {company ? (
          <span>
            {' '}
            at
            {company}
          </span>
        ) : null}
      </p>
      <p className='my-1'>{location && <span>{location}</span>}</p>
      <Link to={`/profile/${_id}`} className='btn btn-primary'>View Profile</Link>
    </div>

    <ul>
      {skills.slice(0, 4).map((skill, index) => (
        <li key={`${index}-${skill}`} className='text-primary'>
          {' '}
          <i className='fas fa-check' />
          {' '}
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

ProfileItem.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    status: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProfileItem;
