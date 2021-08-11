import React from 'react'
import Menu from '../Menu';
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
    </Grid>
  )
};

export default Layout;