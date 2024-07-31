/* eslint-disable no-debugger */
import { useSelector } from 'react-redux';
import { Route, Navigate, RouteProps } from 'react-router-dom'
import { RootState } from '../redux/Store';


/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */

const PrivateRoute = ({ component: Component, roles, ...rest }: any) => {
const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

	return (
		<Route
			{...rest}
			render={(props: RouteProps) => {
				if (isAuthenticated === false) {
					// not logged in so redirect to login page with the return url
					return (
						<Navigate
							to={{
								pathname: '/auth/login',
							}}
						/>
					)
				}
				// c//onst loggedInUser = api.getLoggedInUser()
				// if (roles && roles.indexOf(loggedInUser.role) === -1) {
				// 	// role not authorised so redirect to login page
				// 	return <Navigate to={{ pathname: '/' }} />
				// }
				// authorised so return component
				return <Component {...props} />
			}}
		/>
	)
}

export default PrivateRoute
