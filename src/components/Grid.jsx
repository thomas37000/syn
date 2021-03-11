/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './common/CardTwitter';

const Grid = () => {
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);

  const API_URL = `https://slideyour.net/api.php`;
  const params = {
    s: 'thomas3',
    t: '8845c9cd48230070ac72191467ac1690',
    object: 'post',
    type: 'get',
    network: 'twitter',
    username: '',
    status: 1,
    after: '',
    before: '',
    minid: '',
    maxid: '',
    item_id: '',
    ref: 'yes',
    order: 'ASC',
    order_by: 'pub_date',
    per_page: 30,
    page: 1,
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
  }, [params.t]);

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
