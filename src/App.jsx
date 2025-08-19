
 import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { AuthProvider } from './Auth/Auth.jsx';
 import Landing from './Home/Landing.jsx'
import Login from './Home/Login.jsx'
// import SignUp from './Home/SignUp.jsx'
import LiveWebcam from './WebCamInterface/Cameras.jsx'
// import Alerts from './WebCamInterface/Alerts.jsx'
import ProtectedRoute from './Home/protected.jsx';
import Accounts from './WebCamInterface/Accounts.jsx'
import Layout from './WebCamInterface/Layout.jsx'

function App() {
  


 
   const router=createBrowserRouter([
     {
       path:'/',
       element:<Landing />
     },
     {
         path:'/Login',
     element:<Login/>,
     },
    //  {
    //    path:'/SignUp',
    //    element:<SignUp />
    //  },

    {
    element: <ProtectedRoute />,  
    children: [
      {
        element: <Layout />, 
        children: [
          { path: "Cameras", element: <LiveWebcam /> },
          { path: "Accounts", element: <Accounts /> },
        ],
      },
    ],
  },
     
     
   
   
   ])
   return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   );
   
}

export default App
