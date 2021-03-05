import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ post }) {
  return (
    <Link to="/">
      <div className="divCard">
        lorem
        <div className="card">
          <div>
            <img
              className="logo"
              src={post.picture}
              alt={`logo ${post.firstname}`}
            />
          </div>
          <div className="a">
            <h3 className="b">{post.firstname}</h3>
            <h3 className="c">{post.lastname}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  post: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    linkedin: PropTypes.string,
    picture: PropTypes.string,
    iduser: PropTypes.number,
  }).isRequired,
};
