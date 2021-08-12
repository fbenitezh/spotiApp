import { faArrowLeft, faArrowRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import { Container, DropdownList, Navigation, PrincipalButton } from './style';

const TopMenu: React.SFC = () => {
  const [showDropwDown, setShowDropwDown] = useState(false);
  return (
    <Container>
      <Navigation>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft}/>
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowRight}/>
        </Link>
      </Navigation>
      <div onClick={()=>setShowDropwDown(!showDropwDown)}>
        <div>
          <PrincipalButton>
            <img src="http://localhost:3000/profile.jpg"/>
            <p>Franco Benitez</p>
            <FontAwesomeIcon icon={faCaretDown}/>
          </PrincipalButton>
          <DropdownList className={showDropwDown ? 'show' : ''}>
            <p>Cuenta</p>
            <p>Perfil</p>
            <p>Cerrar sesión</p>
          </DropdownList>
        </div>
      </div>
    </Container>
  );
}
 
export default TopMenu;