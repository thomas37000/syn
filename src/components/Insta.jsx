/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './common/Card';

const InstaGrid = () => {
  const [instagrams, setInstagrams] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);

  const API_URL = 'https://slideyour.net/api.php';
  const params = {
    s: 'thomas',
    t: '4a84dc9cba1b7d45b367b86a3fd57cdd',
    network: 'instagram',
    object: 'post',
    order: 'ASC',
    order_by: 'pub_date',
    per_page: 12,
  };

  useEffect(() => {
    axios
      .get(`${API_URL}`, { params })
      .then((res) => res.data)
      .then((data) => {
        setInstagrams(data);
        setUsers(data.user);
        console.log('insta posts', data);
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
    <>
      <div className="galerie">
        {instagrams.map((insta) => (
          <Card key={insta.pub_id} post={insta} session={insta.session_id} />
        ))}
      </div>
    </>
  );
};

export default InstaGrid;