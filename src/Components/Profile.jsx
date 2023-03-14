import React,{useState} from 'react'
import Prof from '../images/Prof.jpg'
import {BsYoutube,BsTwitch} from 'react-icons/bs'
import YouTubePlayer from '../LiveStream/YoutubePlayer'
import TwitchLivestream from '../LiveStream/TwitchLivestream'



function Profile() {
  const[itsProf, setProf]= useState(false)
  const handleProf=()=>{
    if(itsProf===false){
      setProf(true)
    }else{
      setProf(false)
    }
    
  }
  return (
    <div className='prof'>
       <img src={Prof}  style={{width: '100%',
          height: '100%',
          objectFit: 'cover',borderRadius:30,}}  onClick={handleProf} />
       {itsProf && 
       
       <div className='profBig'>
         Go Live
        <BsYoutube color='red'  size='30' style={{position:'absolute', top:'30', left:'10' }}/>        
     
        <BsTwitch color='white'  size='30'style={{position:'absolute', top:'70', left:'10' }}   />
        <TwitchLivestream/>
      
        </div>}

        <YouTubePlayer videoId="VIDEO_ID"/> 
    </div>
  )
}

export default Profile