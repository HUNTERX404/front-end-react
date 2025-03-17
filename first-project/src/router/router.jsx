import Layout from "@/components/ui/layout";
import LoginPage from "@/pages/login";
import ProfilePage from "@/pages/profile";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, element: <p>test</p> },
      { path: "/profile", Component: ProfilePage },
    ],
  },
]);

export default router;
