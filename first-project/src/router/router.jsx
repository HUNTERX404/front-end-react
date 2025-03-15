import Layout from "@/components/ui/layout";
import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, element: <p>test</p> }],
  },
]);

export default router;
