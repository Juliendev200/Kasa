import { Outlet, useLocation, redirect } from "react-router-dom";
import Navigation from "../Navigation"
import Footer from "../Footer"

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}