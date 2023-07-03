import Users from "./Pages/dashboard/users";
import RootPage from "./Pages/rootPage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


function App() {

    const router = createBrowserRouter([
        {
            path : '/',
            element : <RootPage/>
        },
        {
            path : '/dashboard',
            children : [
                {
                    path : '/dashboard/users',
                    element : <Users/> 
                }
            ]
        }
    ])

    return (
        <div className={'min-h-screen p-4 w-full h-full flex justify-center items-center'}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
