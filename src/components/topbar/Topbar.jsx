import React, { useContext } from 'react'
import "./topbar.css";
import { NotificationsNone,Language, Settings } from '@mui/icons-material';
import { AuthContext } from '../../context/authContext/authContext';
import { logoutStart } from '../../context/authContext/AuthAction';
const Topbar = () => {
  const { dispatch } = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutStart())
  }
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo1">l am aadmin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              
              <Settings />
            </div>
            <div className="profile">
              
              <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
              <div className="options">
                <span className="">Settings</span>
                <span className="" onClick={handleLogout}>Logout</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
      
  )
}

export default Topbar