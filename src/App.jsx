import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import Preview from "./pages/preview";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/authentification/signup";
import Signin from "./pages/authentification/signin";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <Signup/> },
    { path: "/preview", element: <Preview /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/landing", element: <Landing /> },
    {path:  "/signin", element:<Signin/>}
  ]);

  return <RouterProvider router={router} />;
}
export default App;
