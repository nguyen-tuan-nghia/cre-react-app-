import axios from '../../axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  const [pet, setPet]=useState();
  useEffect(()=>{
    async function fetchData() {
    try{
       const res= await axios.get("");
        setPet(res.data.message);
    }catch(err){
      console.log(err);
    }}
    fetchData();
  },[])
  return (
  <>
      <Helmet>
        <title>My Home</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
  <h1>Home aa</h1>
  <div>
    <img src={pet} alt=''/>
  </div>
  </>
  );
};

export default Home;
