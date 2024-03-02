import ReactDOM from "react-dom/client";
import React, { Suspense } from 'react'; // Import Suspense
import { App } from "@components/App";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { About } from '@pages/about'
import { Shop } from '@pages/shop'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/about', element: <div><About /></div> },
            { path: '/shop', element: <div><Shop /></div> }
        ]
    },
]);

// Wrap your RouterProvider with Suspense
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>
);
