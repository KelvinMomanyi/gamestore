import { useEffect, useState } from "react";
import React,{Component} from 'react'
import axios from 'axios'
import one from '../images/one.jpg'
import GTA from '../images/GTA.mp4'
import {MediaQuery} from "react-responsive"
import Games from './vidi.json'
import ReactPlayer from "react-player";
import {BsFillPlayCircleFill} from 'react-icons/bs'


// function MainUi () {
  
//     const [showVideo, setShowVideo] = useState(false);
//     const[currentIndex,setCurrentIndex]=useState(0)
//     const [images, setImages]=useState([]);
//     const [currentImage, setCurrentImage] = useState(0);
  

//     useEffect(() => {
//       const intervalId = setTimeout(() => {
//         setCurrentImage((currentImage + 1) % Games.length);
//       }, 3000); // Change image every 3 seconds
  
//       return () => clearInterval(intervalId);
//     }, []);
  
//     return (
//      <div className='mainUi' >
//          {
//           Games.map((image,index)=>{
//            return(
            
//               <img  
//               key={index}
//               src={image.url}
//               alt={image.url[currentImage]}
//               className="fitImage"
//               style={{ width: '100%', height: 'auto' }}
//               />
           
         

            
//           )})
//            }
  
//     </div>
//   )
//         }

// export default MainUi;


class MainUi extends Component{
     constructor(){
      super()
    this.state={
      index:0,
      index1:0,
      showVideo:true
    }

     }

     componentDidMount() {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => {
          return {
            index: (prevState.index + 1) % Games.length,
          };
        });
      }, 10000);
      // this.intervalId1 = setInterval(() => {
      //   this.setState((prevState) => {
      //     return {
      //       index1: (prevState.index1 + 1) % Games.length,
      //     };
      //   });
      // }, 1000000);

   
    }

    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    // handleImage=()=>{
    //   this.setState({showVideo: false})
 
    //    }
    handleEnd=()=>{
      this.setState({showVideo:true})

    }   

    // handleImage = (event) => {
    //   const id = Number(event.target.id);
    //   this.setState({ index: id, index1: id, showVideo: false});
    // }
   
 render(){
  const {index}= this.state
  const{index1}= this.state
  const{showVideo}=this.state
  const config = {
    youtube: {
      playerVars: {
        controls: 0,
        disablekb: 0,
        modestbranding: 0,
      },
    },
  };

//  const handleImage = (id) => {
//   // addEventListener('click', handleImage)
//       //  if(index!===index1){
//       //   this.setState({ index1===index,  showVideo: false });
//       //  }
//     // if (index1 !== id) {
//     //   const videos = document.querySelectorAll('.fitVid video');
//     //   for (let i = 0; i < videos.length; i++) {
//     //     videos[i].pause();
//     //   }
//     //   this.setState({ index: id, index1: id, showVideo: false });
//     // }
const handleImage = (index) => {
  // if (index1 !== index) {
  //   const videos = document.querySelectorAll('.fitVid video');
  //   for (let i = 0; i < videos.length; i++) {
  //     videos[i].play();
  //   }
  //   this.setState({ index1: index, showVideo: false });
  // }
   if(index1 === !index){
     this.setState({index1: index1 === index})
   }

  this.setState({ showVideo: false });
}

 




return(
  <div className="mainUi">
    {/* <BsFillPlayCircleFill onClick={this.handleImage} className="m-button" id={i}/> */}
     {/* <button onClick={this.handleImage} className="m-button">i></button> */}
     {/* <button> WATCH PREVIEW</button>
     <button>RATE</button> */}
  {showVideo? (Games.map((game, i) => (
    
    <div  key={i}>
       <img
      src={game.img}
      alt={game.name}
      style={{ display: index === i ? 'block' : 'none' }}
      className='fitImage'
      
    /> 
     <BsFillPlayCircleFill onClick={handleImage} className="m-button"/>
    </div>
   
  ))):(
    (Games.map((game, i)=>(
        <ReactPlayer
       key={i}
      
      url={game.url}
      playing={true}
      // playing={true}
      controls={false}
      className='fitVid'
      // style={{ display: index1 === i ? 'block' : 'none' }}
      autoPlay
      width="100%"
      height="100%"
      borderRadius="20px"
      onEnded={this.handleEnd}
    
      />

    )))
  
  )
 } 
  
</div>
//  <div className="mainUi">
//    {
//     Games.map((image, index)=>{
//      return <img key={index} src={image.img} alt={image.img} className="fitImage" style={{ width: '100%', height: 'auto' }}/>
      
//     })
    

//    }




//  </div>
 
)
 }
}

export default MainUi;