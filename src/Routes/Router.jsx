import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Allnews from '../Page/AllNews/Allnews';
import Home from '../Page/Home/Home';
import IndividualDetails from '../Component/NewsDetail/individualDetails';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/news/:newspaperName",
        element: <Allnews></Allnews>
      },
      {
        path: "/news/individual/:id",
        element: <IndividualDetails></IndividualDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
      }
    ]
  },
]);

export default Router;