import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Sidebar from './../components/sidebar/Sidebar';
import "./default.css";

const DefaultLayout =  (Component) =>({...props}) => {
  return (
  <>
    <Topbar />
      <div className="container">
        
      <Sidebar />
      <Component {...props} />
    </div>
  </>)
  
  
}

export default DefaultLayout;