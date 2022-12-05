import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import ErrorPage from './error-page';
import Root from './routes';

const router = createBrowserRouter([
    { 
        path: '/', element: <Root />, errorElement: <ErrorPage />,
        // children: [
        //     { path: '/', element: <Dashboard /> },
        // ]
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;