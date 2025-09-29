import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/Product Component/AllProducts";
import NotFound from "./components/NotFound Component/NotFound";
import Layout from "./components/Layout Component/Layout";
import ContactUs from "./components/Contact Us Component/Contact_Us";
import About from "./components/About Component/About";
import Home from "./components/Home Component/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Categories from "./components/Categories Component/Categories";
import CategoryFiltration from "./components/CategoryFiltration/CategoryFiltration";
import Product_Details from "./components/Product Details Component/Product Details";
import Cart from "./components/Cart Component/Cart";
import { reduxStore } from "./Redux/reduxStore";
import { Provider } from "react-redux";
import Wishlist from "./components/Wishlist Component/Wishlist";
import Checkout from "./components/Checkout Component/Checkout";
import Login from "./components/Login Component/Login";
import Signup from "./components/Signup Component/Signup";
import Guard from "./components/Guards/Guard";
import Terms from "./components/Terms Component/Terms";
import Privacy from "./components/Privacy Component/Privacy";
import SearchResults from "./components/Search Component/Search";

function App() {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const monthName = monthNames[date.getMonth()];

  const formattedDate = `${monthName} ${day}, ${year}`;

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Guard>
              <Home />
            </Guard>
          )
        },
        {
          path: "/",
          element: (
            <Guard>
              <Home />
            </Guard>
          )
        },
        {
          path: "/products",
          element: (
            <Guard>
              <AllProducts />
            </Guard>
          )
        },
        {
          path: "/categories",
          element: (
            <Guard>
              <Categories />
            </Guard>
          )
        },
        {
          path: "/categories/:categoryName",
          element: (
            <Guard>
              <CategoryFiltration />
            </Guard>
          )
        },
        {
          path: "/productDetails/:id",
          element: (
            <Guard>
              <Product_Details />
            </Guard>
          )
        },
        {
          path: "/wishlist",
          element: (
            <Guard>
              <Wishlist />
            </Guard>
          )
        },
        {
          path: "/cart",
          element: (
            <Guard>
              <Cart />
            </Guard>
          )
        },
        {
          path: "/about",
          element: (
            <Guard>
              <About />
            </Guard>
          )
        },
        {
          path: "/checkout/cartId/:cartId",
          element: (
            <Guard>
              <Checkout />
            </Guard>
          )
        },
        {
          path: "*",
          element: <NotFound />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/terms",
          element: (
            <Terms
              companyName="FastCart"
              effectiveDate={`${formattedDate}`}
              contactEmail="isuleimanibrahim@gmail.com"
              contactPhone="+2348144832703"
              contactAddress="Potiskum, Yobe, Nigeria"
            />
          )
        },
        {
          path: "/privacy",
          element: (
            <Privacy
              companyName="FastCart"
              effectiveDate={`${formattedDate}`}
              contactEmail="isuleimanibrahim@gmail.com"
              contactPhone="+2348144832703"
              contactAddress="Potiskum, Yobe, Nigeria"
              termsOfServiceUrl="/terms"
            />
          )
        },
        {
          path: "/search",
          element: (
            <Guard>
              <SearchResults />
            </Guard>
          )
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ]);
  return (
    <>
      <Provider store={reduxStore}>
        <RouterProvider router={route}></RouterProvider>

        <ToastContainer position="top-right" />
      </Provider>
    </>
  );
}

export default App;
