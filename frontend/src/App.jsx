
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import OrderMeal from './components/pages/OrderMeal'

import Restaurants from './components/pages/Restaurants'
import Explore from './components/pages/Explore'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

// import LoginAdmin from './components/Admin/pages/LoginAdmin'
import AddFoodItem from './components/Admin/pages/AddFoodItem'
import AddRestaurant from './components/Admin/pages/AddRestaurant'
import AddArticles from './components/Admin/pages/AddArticles'
import { checkAdminAuthLoader, checkAuthLoader } from './utils/auth';
import ErrorPage from './components/pages/ErrorPage';




const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    element: <Login />,
    
  },
      {
        path: "/explore",
        element: <Explore />,
        
       
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
        loader:checkAuthLoader
        
       
      },
      {
        path: "/order",
        element: <OrderMeal />,
        loader:checkAuthLoader
        
       
      },
      {
        path: "/signup",
        element: <Signup />,
        
       
      },
      
          {
            path: "/admin",
             
        children:[
          // {
          //   path:'admin-login',
          //   element:<LoginAdmin/>
          // },
          {
            path:'add-item',
            element:<AddFoodItem/>,
            loader:checkAdminAuthLoader
          },
          {
            path:'add-restaurant',
            element:<AddRestaurant/>,
            loader:checkAdminAuthLoader
          },
          {
            path:'add-articles',
            element:<AddArticles/>,
            loader:checkAdminAuthLoader,
          },
        ]
          },
          
        
    

    
   
  
  
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App
