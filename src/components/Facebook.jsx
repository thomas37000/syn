/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardFb from './common/CardFacebook';

const Facebook = () => {
  const [facebooks, setFacebooks] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);

  const API_URL = 'https://slideyour.net/api.php';
  const params = {
    s: 'thomas3',
    t: '8845c9cd48230070ac72191467ac1690',
    object: 'post',
    type: 'get',
    network: 'instagram',
    username: '',
    status: 1,
    after: '',
    before: '',
    minid: '',
    maxid: '',
    item_id: '',
    order_by: 'pub_date',
    per_page: 30,
    page: 1,
  };

  useEffect(() => {
    axios
      .get(`${API_URL}`, { params })
      .then((res) => res.data)
      .then((data) => {
        setFacebooks(data);
        setUsers(data.user);
        console.log('facebook posts', data);
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
        {facebooks.map((fb) => (
          <CardFb key={fb.pub_id} post={fb} session={fb.session_id} />
        ))}
      </div>
    </>
  );
};

export default Facebook;
