/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './common/Card';
import './TestApi.css';

export default function TestApiBis() {
  const [posts, setPosts] = useState([]);
  const API_URL = 'https://slideyour.net/api.php';
  const params = {
    s: 'thomas',
    t: '4a84dc9cba1b7d45b367b86a3fd57cdd',
    object: 'post',
    network: 'twitter',
    order: 'ASC',
  };
  useEffect(() => {
    axios
      .get(`${API_URL}`, { params })
      .then((res) => res.data)
      .then((data) => {
        setPosts(data);
        console.log('posts', data);
      })
      .catch((error) => {
        let message;
        if (error) {
          message = "vous n' avez pas accès à cette page";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, []);

  return (
    <div className="test">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
