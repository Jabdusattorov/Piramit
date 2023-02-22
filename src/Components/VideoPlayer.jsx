import React from 'react'
import { Link } from 'react-router-dom';

const VideoPlayer = () => {
  return (
    <section className='bg-black w-75 d-flex justify-content-center align-items center min-vh-75 m-auto my-3'>
      <Link to="/video">
        <img width="100%" height="100%" src="https://www.piramit.uz/assets/img/video-main.jpg" alt="" />
      </Link>
    </section>
  );
}

export default VideoPlayer
