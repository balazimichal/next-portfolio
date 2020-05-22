import Link from 'next/link';

export default () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <p>A JavaScript programmer</p>
    <img src="/static/js.png" alt="js-logo" height="200px" />
  </div>
);