import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
  <>
      <Helmet>
        <title>My Home</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
  <h1>Home</h1>
  </>
  );
};

export default Home;
