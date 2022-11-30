import React, { lazy } from 'react'
import {useRoutes} from 'react-router-dom'
import FilmManagement from '../pages/FilmManagement/FilmManagement';


import UserManagement from '../pages/UserManagement/UserManagement';

const LoginLayout = lazy(()=> import('../layouts/Login/LoginLayout'));
const AdminLayout = lazy(()=> import('../layouts/Admin/AdminLayout'))

const NoAuthGuards = lazy(()=> import('../guards/NoAuthGuards/NoAuthGuards'));
const AdminGuards = lazy(()=> import('../guards/AdminGuards/AdminGuards'))

const EditUserManagement = lazy(()=> import('../pages/EditUserManagement/EditUserManagement'))
const EditMovieManagement = lazy(()=> import('../pages/EditMoiveManagement/EditMovieManagement'))

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
                            path: '/admin/UserManagement/:taiKhoan/edit',
                            element: <EditUserManagement />,
                        },
                        {
                            path: '/admin/FilmManagement',
                            element: <FilmManagement />
                        },
                        {
                            path: '/admin/FilmManagement/:movieid/edit',
                            element: <EditMovieManagement />,
                        },
                    ],
                }
            ]
        }
    ]);
    return routing
}
