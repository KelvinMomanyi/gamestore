import React from 'react'
import Profile from '../Components/Profile'
import SideBar from '../Components/SideBar'
import Icons from '../Components/Icons'
import Setting from '../Components/Setting'
import Logo from '../Components/Logo'

function Settings() {
  return (
    <div>
      <SideBar/>
      <Profile/>
      <Icons/>
      <Setting/>
      <Logo/>
    </div>
  )
}

export default Settings