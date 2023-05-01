
import React from 'react'

import { userData } from './../../dummyData';
import Chart from './../../components/chart/Chart';
import DefaultLayout from '../../layout/DefaultLayout';

import "./home.css";
import Featured from '../../components/featuredInfo/Featured';
import WidgetSm from './../../components/widgetSm/WidgetSm';
import WidgetLG from './../../components/widgetLg/WidgetLG';
import Data from './../../components/datagrid/Data';
import { useState, useEffect, useMemo } from "react";
import axios from 'axios';

const Home = () => {
  const MONTHS = useMemo(
		() => [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],[]
	);

  const [userStats, setUserStats] = useState([]);
  // console.log(userStats);

	useEffect(() => {
    const getStats = async () => {
      setUserStats([]);
			try {
				const res = await axios.get("/users/stats", {
					headers: {
						token:
							"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjdhYTUwNmVhMmIyYjI1ZGEyMTVlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTU3NDUwNSwiZXhwIjoxNjkwMjE0NTA1fQ.tIbjrEtSqwvaxZhErVMOeHWSyZuFZ0ZXEMnSyefCjU0",
					},
        });
        const statsList = res.data.data.sort(function (a, b) {
          return a._id - b._id;
        });
        // console.log("statsList",statsList)
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
            
					])
				);
				// console.log(res.data);
			} catch (e) {
				console.log(e);
			}
		};
		getStats();
  },[MONTHS]);
  // console.log("userstats",userStats);
  return (
    <div className="home">
      <Featured/>
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLG/>
      </div>
    </div>
  )
}

export default DefaultLayout( Home);
// export default  Home;