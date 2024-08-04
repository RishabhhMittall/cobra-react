import React from 'react'
import About from "./About";
import Teams from './Teams';
import Middle from './Middle';
import First from './First';
import "./About.css"

const AllAbout = () => {
  return (
    <div>
    <First />
    <About />
    <Middle />
    <Teams />
   </div>

  )
}

export default AllAbout