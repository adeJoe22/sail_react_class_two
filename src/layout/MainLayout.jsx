import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import './mainlayout.css';

export default function MainLayout() {
  return (
    <div className="container">
      <div id="nav">
        <Header />
      </div>
      <div id="display">
        <Outlet />
      </div>
    </div>
  );
}
