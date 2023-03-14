import React, { Component, useState, useEffect } from 'react'
import {BiSearch} from 'react-icons/bi'
import { InputAdornment, TextField} from '@material-ui/core'
import Games from './vidi.json'

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  // const[data,setData]=useState([])

  
  // data to be filtered
  
  const data = [
    'Call of Duty',
    'Fifa 23', 
     'Watch Dogs 2',
    'GTA 5'
  ];
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./games.json');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // const[games,setGames]=useState([])

  // const gamArray=[
  //   {name:'Call of Duty'},
  //   {name:'Fifa 23'}, 
  //   {name: 'Watch Dogs 2'},
  //   {naame:'GTA 5'}
  // ]
  const filterData = (value) => {
    if(value===''){
      setSuggestions([])
    }else{
     const result = data.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
       setSuggestions(result);
    }
    // const filteredDataWithImages = filterData.map((item) => {
    //   return {
    //     ...item,
    //     images: data.find((x) => x.img=== item.img).images,
    //   };
    // });
  
    // return filteredDataWithImages;
  
  };
 
   
  return (
    <div className='searchbar'>
       
      <TextField
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" left='20px'>
             <BiSearch />
          </InputAdornment>
        ),
      }}
      style={{ backgroundColor: 'aqua', color: 'black', fontSize: '20px', borderRadius:'20px'}}
      // onChange={(event)=>{
      //  const searchString=event.target.value.toLocaleLowerCase()
      //  const filterGames= gamArray.filter((game)=>{
      //  return game.name.toLocaleLowercase().includes(searchString)
      //  })
      // setGames(()=>{
      //   return{games:filterGames}
      //  })
      // }}

      onChange={(e) => {
        setQuery(e.target.value);
        filterData(e.target.value);
      }}
     
    />
       <div>
        {suggestions.map((item) => (
          <div className='ser' key={item}>{item}</div>
        ))}
      </div> 
    </div>
  )
}

export default SearchBar