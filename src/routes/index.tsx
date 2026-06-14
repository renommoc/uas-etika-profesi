import { createBrowserRouter } from "react-router";
import { Layout } from "@/layouts/main";
import { Cases } from "@/pages/cases";
import { Home } from "@/pages/home";
import { Impact } from "@/pages/impact";
import { Quiz } from "@/pages/quiz";
import { Solutions } from "@/pages/solutions";
import { Team } from "@/pages/team";
import { Theory } from "@/pages/theory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "theory", element: <Theory /> },
      { path: "cases", element: <Cases /> },
      { path: "impact", element: <Impact /> },
      { path: "solutions", element: <Solutions /> },
      { path: "quiz", element: <Quiz /> },
      { path: "team", element: <Team /> },
    ],
  },
]);
