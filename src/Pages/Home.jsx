import React from 'react'
import Header from "../Components/Header";
import MinAbout from "../Components/MinAbout";
import VideoPlayer from "../Components/VideoPlayer";
import Footer from './components/Footer';
import Nav from './components/Nav';
import LeftButton from './components/LeftButton';
import RightBUtton from './components/RightButton';
const Home = () => {
  return (
    <div>
      <LeftButton />
      <RightBUtton />
      <Nav />
      <Header />
      <MinAbout />
      <VideoPlayer />
      <Footer />
    </div>
  );
}

export default Home
