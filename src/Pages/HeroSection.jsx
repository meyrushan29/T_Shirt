import React from 'react'
import hero from '../assets/hero.png' // Added file extension

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img 
        src={hero} 
        alt="Hero image" 
        className="w-full h-full object-cover rounded-lg shadow-lg" 
      />
    </div>
  )
}

export default HeroSection