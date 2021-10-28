import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const { user } = useParams();

  return <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Profile</div>
          <Link to="/dashboard">Go To Root</Link>
          <br/>
          <Link to="/dashboard/main">Go To Main</Link>
          <br/>
          <div id="username">{ user }</div>
        </div>
      </div>
  </div>
}

Profile.propTypes = {}

export default React.memo(Profile)
