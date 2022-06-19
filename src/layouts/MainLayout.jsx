import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import NavBar from "../components/navBar/NavBar"

const MainLayout = ({ children }) => {
  const { logged } = useSelector(state => state.auth)
  if (!logged)
    return <Navigate to='/auth/login' />

  return (
    <>
      <NavBar />
      <main style={{
        margin: '80px auto',
        padding: '0px 30px'
      
      }}>

          {children}
      </main>
    </>
  )
}

export default MainLayout