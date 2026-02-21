import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Tours } from "./pages/Tours";
import { Destinations } from "./pages/Destinations";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Booking } from "./pages/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "tours", Component: Tours },
      { path: "destinations", Component: Destinations },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "booking", Component: Booking },
    ],
  },
  { path: "signin", Component: SignIn },
  { path: "signup", Component: SignUp },
]);