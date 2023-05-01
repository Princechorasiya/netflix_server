import React, { useContext, useState } from 'react'
import "./login.css";
import { Link } from 'react-router-dom';
import { KeyRounded } from '@mui/icons-material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { AuthContext } from './../../context/authContext/authContext';
import { login } from '../../context/authContext/apiCalls';


const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);

  }

  return <>
    
    <div className="main_body">
      <div className="container1">
      
        <div className="box">
          <div className="cover"></div>
          <div className="shadow"></div>
          <div className="content">
            
            <div className="form">
              <h3 className="logo"><KeyRounded/></h3>
              <h2>Sign In</h2>
              <div className="inputBox">

                {/* //email input  */}
                <input type="text" name="" id=""  className='loginInput'
                  onChange={(e) => setEmail(e.target.value)} required />
                <PersonRoundedIcon className='icon'/>
                <span>UserName</span>
              </div>

              {/* password input  */}
              <div className="inputBox">
                <input type="password" name="" id="" className='loginInput' onChange={e => setPassword(e.target.value)} required />
                <LockRoundedIcon className='icon'/>
                <span>Password</span>
              </div>
              <div className="links">
                <Link className='link'><QuestionMarkRoundedIcon className='icon'/>Forogt Password</Link>
                <Link className='link'><PersonAddAltRoundedIcon className='icon'/>Sign Up</Link>
              </div>

              {/* button submit  */}
              <div className="inputBox">
                <input type="submit" name="" id=""  className='loginInput' onClick={handleLogin} disabled = {isFetching} />
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
}

export default LoginPage