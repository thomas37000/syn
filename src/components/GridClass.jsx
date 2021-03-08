import React, { Component } from 'react';
import Card from './common/Card';
import getApi from '../api/api';

export default class GridClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchDatas();
  }

  async fetchDatas() {
    await getApi((result) => {
      this.setState(
        {
          posts: result,
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      );
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <div className="galerie">
          {posts.map((post) => (
            <Card key={post.pub_id} post={post} session={post.session_id} />
          ))}
        </div>
      </>
    );
  }
}
