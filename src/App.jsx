import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import SignUp from "./pages/authentification";
import Preview from "./pages/preview";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing/>},
    { path: "/signup", element: <SignUp /> },
    { path: "/preview", element: <Preview /> },
    
    
  ])
  return <RouterProvider router={router}/>;
}
export default App;
