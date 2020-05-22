import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="Error">
    {statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Couldn't get that page, Sorry!`}
    <p>This page does not exist. Return to home.</p>
  </Layout>
);