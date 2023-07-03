import Users from "./Pages/dashboard/users";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

function App() {

    const router = createBrowserRouter([
        {
            path : '/',
            children: [
                {
                    path : '/dashboard',
                    children : [
                        {
                            path : '/dashboard/users',
                            element : <Users/> 
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <div className={'min-h-screen p-2 w-full h-full flex justify-center items-center'}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
