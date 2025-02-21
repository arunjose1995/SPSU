import { createBrowserRouter, RouterProvider, Outlet, useLocation, Navigate } from 'react-router';
import { DashboardLayout, PageContainer } from '@toolpad/core';


// ********************************************************************** //
//                     Begin Page Components Imports                      //
// ********************************************************************** //
import SignIn from './pages/Sign-in/SignIn';
import OrdersPage from './pages/orders';
import { LAYOUT_STYLING } from './layoutConfig';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// ********************************************************************** //
//                      End Page Components Imports                       //
// ********************************************************************** //

// To be designed
const NotFound = () => (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
    </div>
);

const Layout = () => {
      if(localStorage.getItem('session') == null)
    {
        return <Navigate to="/sign-in" replace />;
    }

    return (
        <DashboardLayout
            disableCollapsibleSidebar={true}
            sidebarExpandedWidth={225}
            sx={LAYOUT_STYLING}
        >
            <PageContainer maxWidth="xl">
                <Outlet />
            </PageContainer>
        </DashboardLayout>
    );
};

// ********************************************************************** //
//                          Begin Routing                                 //
// ********************************************************************** //
const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                path: '/',
                Component: Layout,
                children: [
                    {
                        path: '',
                        Component: OrdersPage,
                    },
                   
                ],
            },
            {
                path: '/sign-in',
                Component: SignIn,
            },
            {
                path: '*',
                Component: NotFound,
            },
        ],
    },
]);

// Initialize QueryClient
const queryClient = new QueryClient();

const Router = () => (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);

export default Router;
