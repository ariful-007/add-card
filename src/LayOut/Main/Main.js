import React from 'react';
import MainMenu from '../../component/Navbar/MainMenu';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;