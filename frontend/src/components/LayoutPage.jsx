import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { SearchProvider } from "./SearchProvider";

export default function LayoutPage() {
  return (
    <SearchProvider>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="info">
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </SearchProvider>
  );
}
