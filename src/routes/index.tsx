import React from 'react'
import {Route, RouteProps } from 'react-router-dom'

// components
import PrivateRoute from './PrivateRoute'
import { RxDashboard } from "react-icons/rx";
import { BsPlusCircle } from "react-icons/bs";
// lazy load all the views
// auth
const Login = React.lazy(() => import('../pages/auth/Login'))
const Logout = React.lazy(() => import('../pages/auth/Logout'))
//dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'))
const AgGridExample = React.lazy(() => import('../pages/examples/AgGridExample'))
//account
const Account = React.lazy(() => import('../pages/my-account/EditProfile'))
// error
const Error404 = React.lazy(() => import('../pages/error/Error404'))

export interface RoutesProps {
	key: string
	label: string
	path?: RouteProps['path']
	name?: string
	element?: RouteProps['element']
	route?: any
	exact?: boolean
	icon?: React.ReactNode;
	header?: string
	roles?: string[]
	children?: RoutesProps[]
	isTitle?: boolean,
	isShow?: boolean
}

// dashboards
const dashboardRoutes: RoutesProps = {
	name: 'Dashboards',
	icon: 'home',
	header: 'Navigation',
	isTitle: true,
		key: '',
	label: '',
	children: [
		{
			key: 'dashboard',
			label: 'Dashboard',
			path: '/dashboard',
			name: 'Dashboard',
			element: <Dashboard />,
			route: PrivateRoute,
			icon: <RxDashboard />,
			isTitle: false,
			isShow: true
		},
		{
			key: '',
			label: 'Edit Profile',
			path: '/account/profile',
			name: 'Edit Profile',
			element: <Account />,
			route: PrivateRoute,
			icon: '',
			isTitle: false,
			isShow: false
		},
		
	],
	
}
const exampleRoutes: RoutesProps = {
	name: 'Example',
	icon: 'home',
	header: 'Example',
	isTitle: true,
		key: '',
	label: '',
	children: [
		{
			key: 'agGrid',
			label: 'AG Grid',
			path: '/examples/ag-grid',
			name: 'AG Grid',
			element: <AgGridExample />,
			route: PrivateRoute,
			icon: <BsPlusCircle/>,
			isTitle: false,
			isShow: true
		}
	],
	
}
const customRoutes: RoutesProps = {
	name: 'UI Pages',
	icon: 'home',
	header: 'UI Pages',
	isTitle: true,
		key: '',
	label: '',
	children: [
		{
			key: 'message',
			label: 'With Message',
			path: '/',
			name: 'With Message',
			element: <AgGridExample />,
			route: PrivateRoute,
			icon: <RxDashboard />,
			isTitle: false,
			isShow: true
		},
		{
			key: 'count',
			label: 'With Count',
			path: '/',
			name: 'With Count',
			element: <AgGridExample />,
			route: PrivateRoute,
			icon: <BsPlusCircle/>,
			isTitle: false,
			isShow: true
		},
	],
	
}
// auth
const authRoutes: RoutesProps[] = [
	{
		key: '',
		label: '',
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
		route: Route,
		icon: '',
		isTitle: false,
	},
	{
		key: '',
		label: '',
		path: '/auth/logout',
		name: 'Logout',
		element: <Logout />,
		route: Route,
		icon: '',
		isTitle: false,
	},
]

// public routes
const otherPublicRoutes = [
	{   key: '',
		label: '',
		path: '*',
		name: 'Error - 404',
		element: <Error404 />,
		route: Route,
		icon: ''
	},
	{   key: '',
		label: '',
		path: '/error-404',
		name: 'Error - 404',
		element: <Error404 />,
		route: Route,
		icon: ''
	}
]
const flattenRoutes = (routes: RoutesProps[]) => {
	let flatRoutes: RoutesProps[] = []

	routes = routes || []
	routes.forEach((item: RoutesProps) => {
		flatRoutes.push(item)
		if (typeof item.children !== 'undefined') {
			flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
		}
	})
	return flatRoutes
}


// All routes
const authProtectedRoutes = [dashboardRoutes,exampleRoutes,customRoutes]
const publicRoutes = [...authRoutes,...otherPublicRoutes]
const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes])
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes])
export {publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes,publicProtectedFlattenRoutes}
