import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { data } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

function Home() {
  return (
    <div className='homeContainer'>
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" dataKey="Activeuser" grid/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
