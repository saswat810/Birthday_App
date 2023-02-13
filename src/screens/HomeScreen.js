import React from 'react'
import './homeScreen.css'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
  //   <div>
  //   <header>Happy</header>
  //   <div className="cupcake" />
  //   <header>Birthday!</header>
  // </div>
   <div className="centering" >
{/* <h1>Happy</h1> */}   
    <Link to={`/wishes`}>
    <div className="cupcake" rel="tooltip" title="Click on me to see your birthday wishes" />
      </Link>
     {/* <h1>Birthday!</h1> */}
 </div>
  
  )
}

export default HomeScreen
