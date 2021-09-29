import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Searchbar from './Searchbar.js';
import Banner from './Banner.js';
import Main from './Main.js';

function App() {


  return (
    <div>
      <Banner></Banner>
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      <Main></Main>
      
    </div>
  );
}

export default App;
