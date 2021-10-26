import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Main = () => (
  <div>
    <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <div id="title">Main</div>
        <Link to="/dashboard/profile/e1fe1e87-27c8-4c7a-8337-49279f393577">Go To Profile</Link>
        <br/>
        <Link to="/dashboard">Go To Root</Link>
      </div>
    </div>
  </div>
)

Main.propTypes = {}

export default React.memo(Main)
