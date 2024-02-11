import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ErrorElement } from './components';

import { About, Error, HomeLayout, Landing, Login, Register } from './pages';

import { LandingPageLoader } from './services';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const Router = createBrowserRouter({
  routes: [
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        { 

          index: true,
          element: <Landing />,
          loader: LandingLoader(queryClient), 
        },
      ],
    },
    { path: '/about', element: <About />, errorElement: <Error />, },
    { path: '/register', element: <Register />, errorElement: <Error />, },
    { 
      path: '/login', 
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },    
  ],
  loaders: [LandingPageLoader],
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );            
}

export default App;
