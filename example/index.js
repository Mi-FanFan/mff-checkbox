import React from 'react'
import { render } from 'react-dom'

import Demo1 from './js/Demo1'
import Demo2 from './js/Demo2'


//style
import './scss/main.scss'



render(
  <div className="demo">
    <Demo1 />
    <Demo2 />
  </div>,
  document.getElementById('root')
);