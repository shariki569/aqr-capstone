import React from 'react'
import RootLayout from '../layout'

const Dashboard = () => {
  return (
    <div>
        Dashboard
    </div>
  )
}

Dashboard.Layout = props => <RootLayout {...props} showNavAndFooter={false}/> 

export default Dashboard
