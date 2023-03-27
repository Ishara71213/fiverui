import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Orders from "./pages/orders/Orders";
import Mygigs from "./pages/mygigs/Mygigs";
import ScrollToTop from "./components/scrollToTop/ScrolToTop";

function App() {
  const MainLayout = () => {
    return (
      <div className="app">
        <ScrollToTop>
          <Navbar />
          <Outlet />
          <Footer />
        </ScrollToTop>
      </div>
    );
  };
  const Layout = () => {
    return (
      <div className="app">
        <ScrollToTop>
          <Navbar />
          <Outlet />
        </ScrollToTop>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <Mygigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        // {
        //   path: "/message/:id",
        //   element: <Message />,
        // },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/message/:id",
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
