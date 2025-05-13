import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layouts/MainLayout";
import FetchOld from "./Pages/FetchOld";
import FetchRQ from "./Pages/FetchRQ";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchIndividual from "./components/Layouts/Ul/IndividualPage";
import InfiniteScroll from "./Pages/InfiniteScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
       
      },
      {
        path: "/rq/:id",  // Dynamic route to fetch an individual item
        element: <FetchIndividual />,
      },
      {
        path: "/infinite",  // Dynamic route to fetch an individual item
        element: <InfiniteScroll />,
      },
    ],
  },
]);

function App() {

  
// Create a client
const queryClient = new QueryClient()
{/*  QueryClinet = it is the core of the react-query library. 4
it manages the 
caching background fetching , data synchronization , 
and other query-related logic . 
it provides a centralized store for managing and caching asynchronous data 
in your applicaton .  */}


  return (
    <>

{/* QueryClientProvider : 
this component is part of react - query and is used to provide the Query client instance
to entire react app ( or a portion of it ). 

 */}
      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router}>
          <MainLayout />
        </RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
