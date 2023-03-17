import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Page404 from './pages/Page404'
import BasicLayout from './layouts/basic'
import MainLayout from './layouts/main'


export default function Router() {
  const routes = useRoutes([           
    {
      path: '*',
      element: <MainLayout/>,
      children:[
        { element: <Navigate to="/404" />, index: true },
        { path: '404', element: <Page404 /> },
      ]
    },
  ]);

  return routes;
}
