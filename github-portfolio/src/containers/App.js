import React from 'react';
import logo from '../logo.svg';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;

