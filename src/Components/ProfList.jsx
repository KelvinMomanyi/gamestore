import React,{useState} from 'react'
import Live from './Live'

function ProfList() {
  const profArray=[1,2,3,4,5,6,7]
  return (
   
    <div className='proflist'>
    
      {
        profArray.map((prof)=>(
           <div className='prof2' key={prof}  >mue
              {/* <div className='prof3'></div> */}
           </div>
        ))
      }
      
    </div>
  )
}


export default ProfList