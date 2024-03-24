import React, { useEffect } from 'react'
import "./preloader.css"
import { preLoaderAnim } from '../animation/index';

const PreLoader = () => {

    useEffect(() =>{
        preLoaderAnim();
    },[]);



  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Code,</span>
            <span>Compete,</span>
            <span>Challenge!</span>
        </div>
    </div>
  )
}

export default PreLoader