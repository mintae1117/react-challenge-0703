import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Home from "./routes/home";
import About from "./routes/about";
import Author from "./routes/author";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header />
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/author/:name",
        element: <Author />,
      },
      {
        path: "/author/:name/:book",
        element: <Author />,
      },
      {
        path: "/author/:name/:book/chapters",
        element: <Author />,
      },
      {
        path: "/author/:name/:book/characters",
        element: <Author />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
