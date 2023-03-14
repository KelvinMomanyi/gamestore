import React from 'react'
import { MediaQuery } from 'react-responsive'
import { useState } from 'react';
import { MyContext } from '../Context.js/Context';
import SideBar from '../Components/SideBar'
import SearchBar from '../Components/SearchBar'
import Social from '../Components/Social'
import MainUi from '../Components/MainUi'
import List from '../Components/List'
import Breather from '../Components/Breather'
import Breather2 from '../Components/Breather2'
import Profile from '../Components/Profile'
import Profiles from '../Components/Profiles'
import Icons from '../Components/Icons'
import Logo from '../Components/Logo'
import DropdownMenu from '../Components/Dropddown'
import Footer from '../Components/Footer';
import ProfList from '../Components/ProfList';
import Streams from '../Components/Streams';
import Streams2 from '../Components/Streams2';
import Live from '../Components/Live';


function HomePage() {
    const [isHovering, setIsHovering] = useState(false);
  return (
    <div className='App'>
      <SideBar/>
      <SearchBar/>
      <Live/>
      <ProfList/>
      <Social/> 
      <MyContext.Provider value={isHovering}>
        <MainUi/>
        <List/>  
      </MyContext.Provider>
      {/* <Breather/>
      <Breather2/> */}
      <Profile/>
      <Icons/>
      <Logo/>
      <DropdownMenu/>
      <Streams/>
      <Streams2/>
      <Footer/>
    </div>
  )
}

export default HomePage