/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ post }) {
  return (
    <div className="card">
      <div className="headerCard">
        <h3 className="name">{post.user.name}</h3>
        <img
          className="cardImg"
          src={post.user.avatar_url}
          alt={post.user.name}
        />
      </div>
      <h2 className="network">{post.network}</h2>
      <div className="cardBody">
        <div>{post.pub_date}</div>
        <h3>{post.content}</h3>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.text}</p>
        <a href={post.pub_url} className="socialLink">
          link
        </a>
        <h3 className="hashtag">{post.search}</h3>
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
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
