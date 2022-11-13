import React, { lazy } from 'react'
import {useRoutes} from 'react-router-dom'
import FilmManagement from '../pages/FilmManagement/FilmManagement';


import UserManagement from '../pages/UserManagement/UserManagement';

const LoginLayout = lazy(()=> import('../layouts/Login/LoginLayout'));
const AdminLayout = lazy(()=> import('../layouts/Admin/AdminLayout'))

const NoAuthGuards = lazy(()=> import('../guards/NoAuthGuards/NoAuthGuards'));
const AdminGuards = lazy(()=> import('../guards/AdminGuards/AdminGuards'))


export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <LoginLayout />,
        },
        {
            path: '/admin',
            element: <AdminLayout />, 
            children: [
                {
                    path: '/admin/',
                    element: <AdminGuards />,
                    children: [
                        {
                            path:'/admin/UserManagement',
                            element: <UserManagement />
                        },
                        {
                            path: '/admin/FilmManagement',
                            element: <FilmManagement />
                        }
                    ],
                }
            ]
        }
    ]);
    return routing
}
