import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/index.scss';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';

import MainLayout from './views/layouts/main';
import Home from './views/home';
import About from './views/about';
import Games from './views/games';

import Arena from './views/arena/arena';
import GuduRun from './views/arena/gudu-run';
import GuduWar from './views/arena/gudu-war';
import GuduFx from './views/arena/gudu-fx';
import GuduSmash from './views/arena/gudu-smash';

// import GameCenter from './views/game-center';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            // {
            //     path: 'game-centers',
            //     element: <GameCenter />
            // },
            {
                path: 'arena',
                element: <Arena />,
                children: [
                    {
                        path: 'gudu-smash',
                        element: <GuduSmash />
                    },
                    {
                        path: 'gudu-fx',
                        element: <GuduFx />
                    },
                    {
                        path: 'gudu-war',
                        element: <GuduWar />
                    },
                    {
                        path: 'gudu-run',
                        element: <GuduRun />
                    }
                ]
            },
            {
                path: 'games',
                element: <Games />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: '',
                element: <Home />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
