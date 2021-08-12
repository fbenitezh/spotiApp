import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Card, FotoContainer, Info } from './style';

export interface CardGeneralProps {
  title:string,
  subtitle:string
}
 
const CardGeneral: React.SFC<CardGeneralProps> = (props) => {
  const [showBtnPlay, setShowBtnPlay] = useState(false);

  const handleHover = e =>{
    setShowBtnPlay(!showBtnPlay);
  }

  return (
    <Card onMouseEnter={handleHover} onMouseLeave={handleHover} className="animated fadeIn">
      <FotoContainer>
        <img src="http://localhost:3000/artista.jpeg"/>
      </FotoContainer>
      <Info>
        <h3>{props.title}</h3>
        <span>{props.subtitle}</span>
      </Info>
      <button type="button" className={showBtnPlay ? 'show' : ''}>
        <FontAwesomeIcon icon={faPlay}/>
      </button>
    </Card>
  );
}
 
export default CardGeneral;