import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Home from "./routes/Home";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./error-page";
import Apropos from "./routes/Apropos";
import Logement from "./routes/Logement"
import "../css/style.css"

// Change the original path to home path //
const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Apropos",
    element: <Apropos />,
  },
  {
    path: "/logement",
    children: [
      {
        path: '/logement/:id',
        element: <Logement />,
      },
    ],
  },
],
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);