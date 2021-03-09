/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ post }) {
  return (
    <>
      {post ? (
        <div
          className="cardWithImg"
          style={{ backgroundImage: `url(${post.media_url})` }}
        >
          <div className="cardBodyWithImg">
            <div className="content">
              <p>{post.content}</p>
            </div>
            <div className="cardImg">
              {post ? (
                <img className="getImg" src={post.media_url} alt={''} />
              ) : (
                <img className="hideImg" src={post.media_url} alt="Linkedin" />
              )}
            </div>
          </div>

          <p className="card-text">{post.text}</p>
          {/* <a href={post.pub_url} className="socialLink">
          link
        </a> */}

          <div className="userCard">
            <img
              className="logoUser"
              src={post.user.avatar_url}
              alt={post.user.name}
            />
            <h3 className="name">@{post.user.name}</h3>
          </div>
          <div className="footerCard">
            <h3 className="hashtag">{post.user.name}</h3>
            <img
              className="logoUser"
              src={post.user.avatar_url}
              alt={post.search}
            />
          </div>
        </div>
      ) : (
        <div className="card  ">
          <div className="cardBody">
            <div className="content">
              <p>{post.content}</p>
            </div>
            <div className="cardImg">
              {post ? (
                <img className="getImg" src={post.media_url} alt={''} />
              ) : (
                <img className="hideImg" src={post.media_url} alt="Linkedin" />
              )}
            </div>
          </div>

          <p className="card-text">{post.text}</p>
          {/* <a href={post.pub_url} className="socialLink">
          link
        </a> */}

          <div className="userCard">
            <img
              className="logoUser"
              src={post.user.avatar_url}
              alt={post.user.name}
            />
            <h3 className="name">@{post.user.name}</h3>
          </div>
          <div className="footerCard">
            <h3 className="hashtag">{post.user.name}</h3>
            <img
              className="logoUser"
              src={post.user.avatar_url}
              alt={post.search}
            />
          </div>
        </div>
      )}
    </>
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
