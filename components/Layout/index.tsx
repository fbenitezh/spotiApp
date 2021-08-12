import React from 'react'
import Menu from '../Menu';
import Reproductor from '../Reproductor';
import TopMenu from '../topMenu';
//import SideBar from '../SideBar';
import { Children, Grid } from './style';

const Layout:React.FC = (props)=>{
  return (
    <Grid>
      <Menu/>
      <Children>
        <TopMenu/>
        {props.children}
      </Children>
      <Reproductor/>
    </Grid>
  )
};

export default Layout;