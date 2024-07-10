import React from 'react';
import './styles/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutPage from './components/LayoutPage';
import routes from './routes';


function App() {

    const router = createBrowserRouter([
        {
            element: <LayoutPage />,
            children: routes
        },
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App;
