import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AuthLayout = ({ children }) => {
  const { logged }= useSelector(state => state.auth)
  if (logged)
    return <Navigate to='/' />

  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      height: '80vh',
    }}>
        {children}
    </main>
    )
}

export default AuthLayout