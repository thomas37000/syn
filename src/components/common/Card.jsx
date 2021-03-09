/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ post }) {
  return (
    <div className="card">
      <div className="cardBody">
        <p>{post.content}</p>
        <img src={post.media_url} alt={post.search} />
        <p className="card-text">{post.text}</p>
        {/* <a href={post.pub_url} className="socialLink">
          link
        </a> */}
        <div className="userCard">
          <img
            className="cardImg"
            src={post.user.avatar_url}
            alt={post.user.name}
          />
          <h3 className="name">@{post.user.name}</h3>
        </div>
        <div className="footerCard">
          <h3 className="hashtag">{post.search}</h3>
          <img
            className="cardImg"
            src={post.user.avatar_url}
            alt={post.search}
          />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
    pub_date: PropTypes.string.isRequired,
    pub_url: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
