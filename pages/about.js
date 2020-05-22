import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';

export default class About extends Component {

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/balazimichal")
    const data = await res.json();
    return { user: data};
  }

  render () {
    const { user } = this.props;
    return (
      <Layout title="About">
        <p>{ user.name }</p>
        <p>A JavaScript programmer</p>
        <img src={user.avatar_url} alt="Michal Balazi" height="200px" />
      </Layout>
    )
  }
}