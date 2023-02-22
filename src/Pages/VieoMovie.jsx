import React from 'react'

const VieoMovie = () => {
  return (
    <section id="videoMovie" className=' d-flex justify-content-center w-100 container-fluid bg-black p-5 min-vh-100'>
      <iframe
        width="80%"
        height="850px"
        src="https://www.youtube.com/embed/Ma08XKa34Uk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </section>
  );
}

export default VieoMovie
