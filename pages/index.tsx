import Head from 'next/head'
import { useState } from 'react';
import SeccionFeed from '../components/SeccionFeed';

const Home:React.FC = ()=>{
  const [data, setData] = useState([1,1,1,1,1,1,1,1])
  return (
    <>
      <SeccionFeed title="Escuchados recientemente" data={data}/>
      <SeccionFeed title="Albumes populares" data={data}/>
      <SeccionFeed title="Tus artistas favoritos" data={data}/>
    </>
  )
}


export default Home;