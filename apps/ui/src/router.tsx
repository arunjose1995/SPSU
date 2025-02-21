import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Navigate, useLocation } from 'react-router';
import LinearProgress from '@mui/material/LinearProgress';
import { DashboardLayout, PageContainer } from '@toolpad/core';


// ********************************************************************** //
//                     Begin Page Components Imports                      //
// ********************************************************************** //
import SignIn from './pages/Sign-in/SignIn';
import { LAYOUT_STYLING } from './layoutConfig';
import App from './App';
import Schools from './pages/Schools/Schools';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
    // const { session, loading } = useSession();
    const location = useLocation();

    // if (loading) {
    //     return (
    //         <div style={{ width: '100%' }}>
    //             <LinearProgress />
    //         </div>
    //     );
    // }

    // if (!session) {
        // Add the `callbackUrl` search parameter
       // const redirectTo = `/sign-in?callbackUrl=${encodeURIComponent(location.pathname)}`;
        //return <Navigate to={redirectTo} replace />;
    // }

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
                        path: 'schools',
                        // Component: SchoolOnboarding,
                        Component: Schools
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
// const queryClient = new QueryClient();

const Router = () => (
    // <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    // </QueryClientProvider>
);

export default Router;
