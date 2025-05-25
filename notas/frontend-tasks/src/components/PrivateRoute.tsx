import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const user = localStorage.getItem('user') // ou token

  return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute