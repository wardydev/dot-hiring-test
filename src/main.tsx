import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPlaylist from "./pages/DetailPlaylist";
import Video from "./pages/Video";
import Login from "./pages/Login";
import ProtectedRoute from "./helper/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/detail-playlist",
    element: (
      <ProtectedRoute>
        <DetailPlaylist />
      </ProtectedRoute>
    ),
  },
  {
    path: "/detail-playlist/:playlistId",
    element: (
      <ProtectedRoute>
        <DetailPlaylist />
      </ProtectedRoute>
    ),
  },
  {
    path: "/watch/:videoId",
    element: (
      <ProtectedRoute>
        <Video />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
