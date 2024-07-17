
import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import Preview from "./pages/preview";
import Dashboard from "./pages/dashboard";
import Loader from "./pages/loader"; // Make sure to create this file
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import DashboardLayout from "./pages/dashboard/layout";
import Bio from "./pages/dashboard/pagesdashboard/bio";
import Projects from "./pages/dashboard/pagesdashboard/projects";
import Skills from "./pages/dashboard/pagesdashboard/skills";
import Socials from "./pages/dashboard/pagesdashboard/socials";
import Experience from "./pages/dashboard/pagesdashboard/experience";

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

  if (isLoading) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
}

export default App;
