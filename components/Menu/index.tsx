import { faHeart, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Container, Icon, Item, Navbar } from './style';
import Link from 'next/link';
import { useRouter } from 'next/router';
 
const Menu: React.SFC = () => {
  const router = useRouter();
  
  return (
    <Container>
      <Navbar>
        <Item onClick={()=>router.push('/')} className={router.pathname == "/" ? 'active' : ''}>
          <Icon>
            <FontAwesomeIcon icon={faHome}/>
          </Icon>
          <p>Home</p>
        </Item>
        <Item onClick={()=>router.push('/search')} className={router.pathname == "/search" ? 'active' : ''}>
          <Icon>
            <FontAwesomeIcon icon={faSearch}/>
          </Icon>
          <p>Buscar</p>
        </Item>
        <hr/>
        <h4>Mis playlist</h4>
        <Item>
          <Icon>
            <FontAwesomeIcon icon={faPlus}/>
          </Icon>
          <p>Nueva playlist</p>
        </Item>
        <Item>
          <Icon>
            <FontAwesomeIcon icon={faHeart}/>
          </Icon>
          <p>Mis favoritas</p>
        </Item>
        <Link href="/">Techno bebe</Link>
        <Link href="/">Proyecto riff/viticus</Link>
        <Link href="/">Techno</Link>
        <Link href="/">Discover Weekly</Link>
      </Navbar>
    </Container>
  );
}
 
export default Menu;