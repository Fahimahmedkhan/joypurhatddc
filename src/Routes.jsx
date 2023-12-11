import HomeLayout from "./layouts/HomeLayout";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import OurDoctors from "./pages/OurDoctors/OurDoctors";
import Services from "./pages/Services/Services";
import Testimonial from "./pages/Testimonial/Testimonial";

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
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/testimonials",
        element: <Testimonial />,
      },
      {
        path: "/our-doctors",
        element: <OurDoctors />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

export default router;
