import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../directory/Directory';

const Home=()=>{
const catagory = [
  {
    id:1,
    title:'Hats',
    imageUrl:	"https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    id:2,
    title:"Women",
    imageUrl:	"https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    id:3,
    title:"Jacket",
    imageUrl:	"https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    id:4,
    title:"Mens",
    imageUrl:	"https://i.ibb.co/R70vBrQ/men.png"
  },
  {
    id:5,
    title:"Sneaker",
    imageUrl:	"https://i.ibb.co/0jqHpnp/sneakers.png"
  }
]
return(
      <>
        <Directory catagory={catagory}></Directory> 
      </>
    )
}

export default Home;