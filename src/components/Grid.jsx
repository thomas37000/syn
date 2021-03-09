/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './common/Card';

const Grid = () => {
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);

  const API_URL = `https://slideyour.net/api.php`;
  const params = {
    s: 'thomas',
    t: '4a84dc9cba1b7d45b367b86a3fd57cdd',
    network: 'twitter',
    object: 'post',
    order: 'ASC',
    order_by: 'pub_date',
    per_page: 12,
    session_id: 0,
  };

  useEffect(() => {
    axios
      .get(`${API_URL}`, { params })
      .then((res) => res.data)
      .then((data) => {
        setPosts(data);
        setUsers(data.user);
        console.log('twitter posts', data);
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
  }, [params.session_id[0]]);

  return (
    <>
      <div className="galerie">
        {posts.map((post) => (
          <Card key={post.pub_id} post={post} session={post.session_id} />
        ))}
      </div>
    </>
  );
};

export default Grid;
