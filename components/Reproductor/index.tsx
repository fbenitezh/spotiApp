import { faPause, faRandom, faRedo, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Config, Container, Selector, SongImage, SongInfo } from './style';

 
const Reproductor: React.SFC = () => {
  return (
    <Container>
      <SongInfo>
        <SongImage>
          <img src="http://localhost:3000/song.jpeg"/>
        </SongImage>
        <div>
          <p>No Me Conocen (Remix) [con DUKI, Rei & Tiago]</p>
          <span>BANDIDO, Duki, Rei, Tiago PZK</span>
        </div>
      </SongInfo>
      <Selector>
        <button type="button" className="disabled"><FontAwesomeIcon icon={faRedo}/></button>
        <button type="button"><FontAwesomeIcon icon={faStepBackward}/></button>
        <button type="button"><FontAwesomeIcon icon={faPause}/></button>
        <button type="button"><FontAwesomeIcon icon={faStepForward}/></button>
        <button type="button" className="disabled"><FontAwesomeIcon icon={faRandom}/></button>
      </Selector>
      <Config>

      </Config>
    </Container>
  );
}
 
export default Reproductor;