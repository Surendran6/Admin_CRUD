import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PermanentDrawerLeft from './components/Sidebar';
import  NavBar  from './components/newNavbar';
import Admin from './components/Admin';
import Users from './context/Users/UsersList';
import ProductPage from './context/Product/ProductPage'
import CreateUser from './context/Users/CreateUser'

function AdminDashboard() {
  return (
    <div className="main-container">
     <div className="side-menu"><PermanentDrawerLeft/> </div>      
     <div className="left-side"><NavBar/>
     <div className="prograssbar"><Admin/></div></div> </div>           
      );
}

function Users1() {
  return (
    <div className="main-container">
     <div className="side-menu"><PermanentDrawerLeft/> </div>      
     <div className="left-side"><NavBar/>
     <div className="prograssbar"><Users/></div></div> </div>           
      );
}

function ProductPage1() {
  return (
    <div className="main-container">
     <div className="side-menu"><PermanentDrawerLeft/> </div>      
     <div className="left-side"><NavBar/>
     <div className="prograssbar"><ProductPage/></div></div> </div>           
      );
}

function CreateUser1() {
  return (
    <div className="main-container">
     <div className="side-menu"><PermanentDrawerLeft/> </div>      
     <div className="left-side"><NavBar/>
     <div className="prograssbar"><CreateUser/></div></div> </div>           
      );
}

export default AdminDashboard
export { 
  ProductPage1,
  Users1,
  CreateUser1}; 