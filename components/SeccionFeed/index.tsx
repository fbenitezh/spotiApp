import React from 'react'
import CardGeneral from '../CardGeneral';
import CardLong from '../CardLong';
import { Body } from './style';

export interface SeccionFeedProps {
  title:string,
  data:number[],
  cardLong?:boolean
}
 
const SeccionFeed: React.SFC<SeccionFeedProps> = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <Body className={props.cardLong ? 'grid' : ''}>
        {props.data.map((item,key)=>(
          props.cardLong ? <CardLong title="titulo" key={key}/> :
          <CardGeneral key={key} title="Titulo" subtitle="Subtitulo de la card"/>
        ))}
      </Body>
    </>
  );
}
 
export default SeccionFeed;