import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import First from './first.jsx'
import Second from './second.jsx';
import Third from './third.jsx';
import Fourth from './fourth.jsx';
import Fifth from './fifth.jsx';
import Beginning from './beginning.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/morte" element={<Second />} />
      <Route path="/olhos" element={<Third />} />
      <Route path="/fim" element={<Fourth />} />
      <Route path="/dezembro8" element={<Fifth />} />
      <Route path="/final" element={<Beginning />} />
    </Routes>
  </Router>
)
