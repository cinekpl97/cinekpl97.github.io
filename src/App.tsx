import React from 'react';
import TopNavbar from './components/navbar'
import Background from './background.jpg'
import './custom.css'

const divStyle = {
  backgroundImage: `url(${Background})`
}

export default function App(): JSX.Element {
  return (
    <div className='container'>
      <TopNavbar></TopNavbar>
    </div>
  );
}