// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Landing from "./pages/landing";
// import Preview from "./pages/preview";
// import Dashboard from "./pages/dashboard";
// import Signup from "./pages/authentification/signup";
// import Signin from "./pages/authentification/signin";

// function App() {
//   const router = createBrowserRouter([
//     { path: "/signup", element: <Signup/> },
//     { path: "/preview", element: <Preview /> },
//     { path: "/dashboard", element: <Dashboard /> },
//     { path: "/landing", element: <Landing /> },
//     {path:  "/signin", element:<Signin/>}
//   ]);

//   return <RouterProvider router={router} />;
// }
// export default App;

import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import Preview from "./pages/preview";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/authentification/signup";
import Signin from "./pages/authentification/signin";
import Loader from "./pages/loader"; // Make sure to create this file

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    { path: "/signup", element: <Signup/> },
    { path: "/preview", element: <Preview /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/", element: <Landing /> },
    { path: "/signin", element: <Signin/> }
  ]);

  if (isLoading) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
}

export default App;
