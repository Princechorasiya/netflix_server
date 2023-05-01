import React, { useEffect, useState } from 'react'
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';
import axios  from 'axios';

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true",
          {
            headers: {
              token:
                "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjdhYTUwNmVhMmIyYjI1ZGEyMTVlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTU3NDUwNSwiZXhwIjoxNjkwMjE0NTA1fQ.tIbjrEtSqwvaxZhErVMOeHWSyZuFZ0ZXEMnSyefCjU0",
            },
          });
        setNewUsers(res.data.data);
      } catch (e) {
        console.log(e)
      }
    };
    getNewUsers();
});
  // console.log(newUsers);
  return (
    <>
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          {newUsers.map((user) => (

            
          
            <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      
      ))}
      </ul>
    </div>
    </>
  )
}

export default WidgetSm