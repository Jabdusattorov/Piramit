import React from 'react'
import Footer from './components/Footer';
import LeftButton from './components/LeftButton';
import Nav from './components/Nav'
import PageAbout1 from './ComponentsPage1/PageAbout1';
import RightBUtton from './components/RightButton';

const Page1 = () => {
  return (
    <div>
        <LeftButton/>
        <RightBUtton/>
        <Nav />
        <PageAbout1/>
        <Footer/>
    </div>
  )
}

export default Page1
