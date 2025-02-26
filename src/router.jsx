import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Error from "./components/pages/Error";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path:"/privacy",
        element:<Privacy/>

      }
    ],
    errorElement: <Error />,
  },
]);
export default appRouter;
