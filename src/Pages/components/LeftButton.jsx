import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import "./left.scss"

const LeftButton = () => {
    // const navigate = useNavigate();
  return (
    <div className='left-link'>
      <a href='https://piramit.uz/assets/ekatalog.pdf' className='link' target="_blank">
        ELEKTRON KATALOG 
      </a>
    </div>
  )
}

export default LeftButton
