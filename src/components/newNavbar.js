import * as React from 'react';
import img2 from './image/img2.png';
import img3 from './image/img3.png';
import img5 from './image/img5.png';
import img1 from './image/img1.png';
import danger from './image/danger.png';
import document from './image/document.png';
import money from './image/money-bag.png';
import work from './image/hard-work.png';
import {Navbar, Nav,NavDropdown,Form,FormControl,Button,Badge } from 'react-bootstrap';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

function NavBar(){
    return(      
        <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />            
          </Form><Button variant="primary"><SearchIcon/></Button>
          <Nav className="ml-auto">
            <NavDropdown title={<div><NotificationsIcon/><Badge pill bg="danger">4+</Badge></div>} id="basic-nav-dropdown"  aria-haspopup="true" aria-expanded="false">
              <NavDropdown.Item href="#action/3.1">
              <h6 className="dropdown-header"> Alerts Center </h6></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">{<img className="image_pro" src={work} alt="profile img"/>} work is going well... </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">{<img className="image_pro" src={document} alt="profile img"/>} Use this document for tax... </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">{<img className="image_pro" src={money} alt="profile img"/>} Make money with crypto... </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">{<img className="image_pro" src={danger} alt="profile img"/>} Help me with a problem I've been having... </NavDropdown.Item>
              </NavDropdown>
            <NavDropdown title={<div><MailIcon /><Badge pill bg="danger">6</Badge></div>} id="basic-nav-dropdown"  aria-haspopup="true" aria-expanded="false">
            <NavDropdown.Item href="#action/3.1"><h6 className="dropdown-header"> Message Center </h6></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">{<img className="image_pro" src={img1} alt="profile img"/>} Hi there! I am wondering if you can... </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">{<img className="image_pro" src={img3} alt="profile img"/>} Time is 8.00pm complete it ... </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">{<img className="image_pro" src={img5} alt="profile img"/>} I am wondering if you can... </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">{<img className="image_pro" src={img2} alt="profile img"/>} Hi there! I am wondering if you can... </NavDropdown.Item>
              </NavDropdown>
            <p className="para">Surendran</p>
            <NavDropdown title={<img className="image_pro" src={img2} alt="profile img"/>} id="basic-nav-dropdown"  aria-haspopup="true" aria-expanded="false">
              <NavDropdown.Item href="#action/3.1"><PersonOutlineIcon/> profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><SettingsIcon/> Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><LocalActivityIcon/> Activity Log</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><LogoutIcon/> Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
    );
}
export default NavBar