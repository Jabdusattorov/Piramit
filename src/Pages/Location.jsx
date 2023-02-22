import React from 'react'
import Footer from './components/Footer'
import LeftButton from './components/LeftButton'
import Nav from './components/Nav'
import RightBUtton from './components/RightButton'

const Location = () => {
  return (
    <div>
      <LeftButton/>
      <RightBUtton/>
      <Nav/>
      <h1 className='text-white ps-5'>Joylashuv</h1>
      <img className='m-auto my-5' width="85%"  src="http://www.piramit.uz/assets/img/map.jpg" alt="" />
      <Footer/>
    </div>
  )
}

export default Location