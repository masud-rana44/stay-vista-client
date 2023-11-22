import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddRoom from "../pages/Dashboard/Host/AddRoom";
import MyListings from "../pages/Dashboard/Host/MyListings";
import ManageUses from "../pages/Dashboard/Admin/ManageUses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "my-listings",
        element: <MyListings />,
      },
      {
        path: "add-room",
        element: <AddRoom />,
      },

      // admin routes
      {
        path: "manage-users",
        element: <ManageUses />,
      },
    ],
  },
]);
