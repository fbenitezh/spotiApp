import React from 'react'
import CardGeneral from '../CardGeneral';
import { Body } from './style';

export interface SeccionFeedProps {
  title:string,
  data:number[]
}
 
const SeccionFeed: React.SFC<SeccionFeedProps> = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <Body>
        {props.data.map((item,key)=>(
          <CardGeneral key={key} title="Titulo" subtitle="Subtitulo de la card"/>
        ))}
      </Body>
    </>
  );
}
 
export default SeccionFeed;