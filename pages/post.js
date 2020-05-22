import Layout from '../components/Layout.js';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={ router.query.title }>
    <p>lorem ipsum</p>
  </Layout>
);

export default withRouter(Post);