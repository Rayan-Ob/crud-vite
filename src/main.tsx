// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './pages/Auth/Auth.tsx'
import Login from './pages/Login/Login.tsx'
import SignUp from './pages/SignUp/SignUp.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import Products from './pages/Products/Products.tsx'
import ReadProducts from './pages/ReadProducts/ReadProducts.tsx'
import ProductsDetails from './pages/ProductDetails/ProductsDetails.tsx'
import CreateProduct from './pages/CreateProduct/CreateProduct.tsx'
import Favourites from './pages/Favourites/Favourites.tsx'
import Order from './pages/Order/Order.tsx'
import EditProduct from './pages/EditProduct/EditProduct.tsx'


const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {

        path: "",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />

      }
    ]
  }

  ,
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ReadProducts />
          },
          {
            path: "/details/:id",
            element: <ProductsDetails />
          },
          
          {
            path : "create",
            element : <CreateProduct/>

        },
        {
          path : "/product/edit/:id",
          element: <EditProduct/>
        }
        ]
        
      




      },
      {
        path :"favorites",
        element : <Favourites/>
      }
      ,
      {
        path :"order",
        element : <Order/>
      }
      


    ]

  }
  ,
 



])

// const router = createBrowserRouter([
//   

//   //

//   // {
//   //   path : "/",
//   //   element : <Dashboard/>,
//   //   children:[
//   //     {
//   //       path : "",
//   //       element : <Products/>,
//   //       children:[
//   //         {
//   //           path:"",
//   //           element: <ReadProducts/>
//   //         }
//   //         ,
//   //         {
//   //           path:"/details/:id",
//   //           element: <ProductsDetails/>
//   //         },
//   //         {
//   //           path:"/product/edit/:id",
//   //           element: <EditProduct/>
//   //         }

//   //         ,

//   //         {
//   //           path : "create",
//   //           element : <CreateProduct/>
//   //         }
//   //       ]
//   //     }

//   //     ,
//   //     {
//   //       path :"favorites",
//   //       element : <Favourites/>
//   //     }
//   //     ,
//   //     {
//   //       path :"order",
//   //       element : <Order/>
//   //     }
//   //   ]
//   // }
// ])



createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}

  </React.StrictMode>,
)
