import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import Preview from "./pages/preview";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import DashboardLayout from "./pages/dashboard/layout";
import Bio from "./pages/dashboard/pagesdashboard/bio";
import Projects from "./pages/dashboard/pagesdashboard/projects";
import Skills from "./pages/dashboard/pagesdashboard/skills";
import Socials from "./pages/dashboard/pagesdashboard/socials";
import Experience from "./pages/dashboard/pagesdashboard/experience";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { path: "/preview", element: <Preview /> },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/dashboard/bio", element: <Bio /> },
        { path: "/dashboard/skills", element: <Skills /> },
        { path: "/dashboard/projects", element: <Projects /> },
        { path: "/dashboard/socials", element: <Socials /> },
        { path: "/dashboard/experience", element: <Experience /> },
      ],
    },
    { path: "/", element: <Landing /> },
    { path: "/signin", element: <Signin /> },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
