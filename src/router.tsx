import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const AdminLayout = await import("./components/custom/AdminLayout");
      return { Component: AdminLayout.default };
    },
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("./pages/AddProduct")).default,
        }),
      },
    ],
  },
]);

export default router;
