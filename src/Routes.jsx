import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <Home />,
      },
    ],
  },
]);

export default router;
