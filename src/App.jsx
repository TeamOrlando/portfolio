import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import SignUp from "./pages/authentification";
import Preview from "./pages/preview";
import Dashboard from "./pages/dashboard";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <SignUp /> },
    { path: "/preview", element: <Preview /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/landing", element: <Landing /> },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
