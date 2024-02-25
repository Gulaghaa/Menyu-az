import React, { useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import Restaurants from "./Restaurants";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { AnimatePresence, px } from "framer-motion";
import CartItemLoader from "./CartItemLoader";
import About from "./About";
import { menyuazlogo } from "../assets";
const Layout = () => {

    
    return (
        <>
            <Navbar />
            <div className="bg-white min-h-[100vh] pt-[3em] flex flex-col">
                <Outlet />
            </div>
        </>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route exact path="/restaurants/" element={<Restaurants />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route
                path="/restaurants/:id/*"
                element={<CartItemLoader />}
                errorElement={<NotFound />}
            />
        </Route>
    )
);

export default function AnimatedRoutes() {
    return (
        <>
            <AnimatePresence>
                <RouterProvider router={router} />
            </AnimatePresence>
        </>
    );
}
