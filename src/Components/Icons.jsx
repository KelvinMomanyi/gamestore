import React,{useState, useEffect} from 'react'
import {IoLogoPlaystation , IoIosCloudDownload, IoIosCog,IoIosFingerPrint, IoIosLeaf } from 'react-icons/io'
import {FaOpencart} from 'react-icons/fa'
import {FaXbox} from 'react-icons/fa'
import {SiNintendoswitch} from 'react-icons/si'
import {MdComputer} from 'react-icons/md'
import {CiSettings} from 'react-icons/ci'
import {FiPower} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Icons() {
 const navigate = useNavigate()
 const [itsCart, setCart]= useState(false)
 
 const handleCart=()=>{
   if(itsCart=== false){
    setCart(true)
   }else{
    setCart(false)
   }
 }
 const handleSettings=()=>{
  navigate('/Settings')
 }

  return (
   <div className>
     <div className='play'></div>
     <div className='play2'>
       <ul><IoLogoPlaystation style={{color:'#ffff',filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 1.5))"}}/></ul>
       <ul><FaXbox    style={{color:"#0e7a0d",filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 1.5))"}}/></ul> 
       <ul> <SiNintendoswitch style={{color:'#fe0016',filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 1.5))"}}/></ul>
       <ul><MdComputer style={{color:'grey',filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 1.5))"}}/></ul>
       <ul style={{paddingTop:'160px',filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 1.5))"}}><CiSettings onClick={handleSettings}/></ul>   
       <ul style={{marginTop:'-30px', scale:"0.9", left:"4px", color:'#8B0000',filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 1.5))"}}><FiPower onClick={()=>navigate('/')}/></ul> 
     </div>  
     <div className='shopcart'>
      <FaOpencart style={{color:'white',top:'6px', position:'absolute',left:"11px" }} onClick={handleCart}/>
     {itsCart && (<div className='cart'> Cart</div>)}
     
     </div>
     
      
   </div>

      
      
      
  )
}

export default Icons