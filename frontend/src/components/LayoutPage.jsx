import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import '../styles/layout.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function LayoutPage() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="info">
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  )
}
