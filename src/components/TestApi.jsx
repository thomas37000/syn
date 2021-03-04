import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
// import getApi from "../api/api";
import Card from './common/Card';

const TestApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const API_URL = 'http://api.slideyour.net/api.php';
    axios.get(`${API_URL}`).then((res) => {
      console.log(res);
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
