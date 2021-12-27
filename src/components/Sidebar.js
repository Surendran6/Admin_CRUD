import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Link} from 'react-router-dom'

const drawerWidth = 240;

 function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <span className="sb_admin"><SentimentVerySatisfiedIcon/>  SB ADMIN</span>
        <Divider />
        <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i><DashboardIcon/>
            <button className="side-button">Dashboard</button>
        </Link>
                </li> 
        <Divider />
        <List>  
        
        </List> 
        <Link className="nav-link" to = '/users'>
         <GroupAddIcon/><button className="side-button">Users</button>           
        </Link>
        
        <Link className="nav-link" to='/products'>
          <i className="fab fa-product-hunt"></i><ProductionQuantityLimitsIcon/>
          <button className="side-button">Products</button>
        </Link>                       
      </Drawer>      
    </Box>
  );
}

export default PermanentDrawerLeft

