// src/components/Layout.component.tsx
import React from 'react';
import { Outlet } from "react-router-dom";
import Navigation from './Navigation.component';


const Layout: React.FC = () => {


  return (
    <div className="min-h-screen relative">

    <header className=" bg-gray-100 z-10">
      <Navigation />
    </header>

    <main className="container mx-auto p-4 mb-4">
        <Outlet />
    </main>

    </div>
  );
};

export default Layout;
