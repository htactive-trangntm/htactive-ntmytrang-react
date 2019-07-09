import React, { Component } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";





const routes = [
    {
        path: '/',
        exact: 'true',
        main: ()=> <Home />
    },
    {
        path: '/about',
        exact: 'false',
        main: ()=> <About />
    },
    {
        path: '/contact',
        exact: 'false',
        main: ()=> <Contact />
    },
    {
        path: '/products',
        exact: 'false',
        main: ()=> <Products />
    },
    {
        path: '',
        exact: 'false',
        main: ()=> <NotFound />
    }
]

export default routes