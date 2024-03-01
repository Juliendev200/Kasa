import { Outlet, useLocation, redirect } from "react-router-dom";
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

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