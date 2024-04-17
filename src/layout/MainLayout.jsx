import React, { useContext } from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import './mainlayout.css';
import { FormDataContext } from '../context/GlobalContext';

export default function MainLayout() {
  const { isSubmitted } = useContext(FormDataContext);
  return (
    <div className="container">
      <div id="nav">{isSubmitted && <Header />}</div>

      <div id="display">
        <Outlet />
      </div>
    </div>
  );
}
