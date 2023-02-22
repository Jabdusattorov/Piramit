import React from 'react'
import { Link } from 'react-router-dom';

const VideoPlayer = () => {
  return (
    <section className='bg-black w-100 d-flex justify-content-center align-items center min-vh-100 '>
      <Link to="/videoTime">
        <img width="1720px" src="https://www.piramit.uz/assets/img/video-main.jpg" alt="" />
      </Link>
    </section>
  );
}

export default VideoPlayer
