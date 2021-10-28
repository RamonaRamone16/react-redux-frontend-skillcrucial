import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
  <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          <Link to="/dashboard/profile/e1fe1e87-27c8-4c7a-8337-49279f393577">Go To Profile</Link>
          <br/>
          <Link to="/dashboard/main">Go To Main</Link>
        </div>
      </div>
  </div>
)

Dashboard.propTypes = {}

export default React.memo(Dashboard)
