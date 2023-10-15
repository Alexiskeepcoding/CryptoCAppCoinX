import React from 'react';
import { useState } from 'react'
import './App.css'
import { Switch, Route, Link } from 'react';
import { Layout, Topography, Space} from 'antd';

import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <>
      <div style = {{width: '100%'}}>
        <Navbar />
      </div>
    </>
  )
}

export default App
