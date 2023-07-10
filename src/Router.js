import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Darkmode from './Darkmode';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Darkmode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
