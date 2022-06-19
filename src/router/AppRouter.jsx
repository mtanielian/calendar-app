import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { doRenewToken } from '../actions/auth.actions'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import CalendarPage from '../pages/calendar/CalendarPage'

const AppRouter = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(doRenewToken())
  }, [])


  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/login' element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path='/auth/register' element={<AuthLayout><RegisterPage /></AuthLayout>} />
        <Route path='/auth/*' element={<AuthLayout><LoginPage /></AuthLayout>} />

        <Route path='/' element={<MainLayout><CalendarPage /></MainLayout>} />
        <Route path='/*' element={<MainLayout><CalendarPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter