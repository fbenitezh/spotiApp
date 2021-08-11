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
      
      </Selector>
      <Config>

      </Config>
    </Container>
  );
}
 
export default Reproductor;