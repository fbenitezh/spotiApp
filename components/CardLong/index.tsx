import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react'
import { CardGeneralProps } from '../CardGeneral';
import { Card, FotoContainer, Info } from './style';
import artista from '../../public/artista.jpeg';

const CardLong: React.SFC<CardGeneralProps> = (props) => {
  const [showBtnPlay, setShowBtnPlay] = useState(false);

  const handleHover = e =>{
    setShowBtnPlay(!showBtnPlay);
  }

  return (
    <Card onMouseEnter={handleHover} onMouseLeave={handleHover} className="animated fadeIn fast">
      <FotoContainer>
        <Image src={artista} alt="nombre" placeholder="blur" width={100} height={80}/>
      </FotoContainer>
      <Info>
        <h3>{props.title}</h3>
      </Info>
      <button type="button" className={showBtnPlay ? 'show' : ''}>
        <FontAwesomeIcon icon={faPlay}/>
      </button>
    </Card>
  );
}
 
export default CardLong;