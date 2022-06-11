import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Router as PageRouter} from './Router/Router';
import Navigtion from './components/Layout/Navigation/Navigation';
import Footer from './components/Layout/Footer/Footer';
import TabHeader from './components/Layout/Header/TabHeader';

console.log("process.env.REACT_APP_IS_AXIOS_MOCK",process.env.REACT_APP_IS_AXIOS_MOCK) // remove this after you've confirmed it working

function App() {
  return (
    <BrowserRouter>
    <div className='yl__container'>
      <Navigtion></Navigtion>
      <div className='header'><TabHeader></TabHeader></div>
      <PageRouter/>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
