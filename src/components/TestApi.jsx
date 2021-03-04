/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
// import getApi from "../api/api";
import Card from './common/Card';

const TestApi = () => {
  const [posts, setPosts] = useState([]);

  const CORS = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'http://slideyour.net/api.php';
  const params = {
    s: 'thomas',
    t: '4a84dc9cba1b7d45b367b86a3fd57cdd',
    object: 'post',
  };

  useEffect(() => {
    axios.get(` ${CORS} ${API_URL}`, { params }).then((res) => {
      console.log('api', res);
      setPosts(res);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.idpost} post={post} />
      ))}
      <Card />
    </div>
  );
};

/* TestApi.propTypes = {
    
}; */

export default TestApi;
