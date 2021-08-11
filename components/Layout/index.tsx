import React from 'react'
import Menu from '../Menu';
import Reproductor from '../Reproductor';
import SideBar from '../SideBar';
import { Children, Grid } from './style';

const Layout:React.FC = (props)=>{
  return (
    <Grid>
      <Menu/>
      <Children>
        {props.children}
      </Children>
      <SideBar/>
      <Reproductor/>
    </Grid>
  )
};

export default Layout;