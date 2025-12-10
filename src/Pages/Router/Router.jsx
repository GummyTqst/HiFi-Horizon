import { createBrowserRouter } from "react-router";
import Layout from "../../Components/Layout/Layout";
import ErrorPage from "../ErrorPage";
import Home from "../Home";
import Shop from "../Shop";
import AboutUs from "../About";
import Contact from "../Contact";

//Loaders
import { loadShop } from "../../loaders/shop_loader";
//FAQ Page
import FAQ from "../faq";
import ProductDetails from "../../Components/productDetails/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/aboutus",
                element: <AboutUs />,
            },
            {
                path: "/shop",
                element: <Shop />,
                loader: loadShop,
            },
            {
                path: "productdetails/:productId",
                element: <ProductDetails />,
            },   
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/faq",
                element: <FAQ />,
            },
        ],
    },
]);
