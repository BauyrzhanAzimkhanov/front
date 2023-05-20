import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import FinalRegister from './pages/FinalRegister'
import ForgetPassword from './pages/ForgetPassword'
import ForgetPasswordWithEmail from './pages/ResetPasswordWithEmail'
import ResetPassword from './pages/ResetPassword'
import StudentMain from './pages/StudentMain'
import { store } from './components/store/store'
import TeacherMain from './pages/TeacherMain'

const Router: React.FC = () => {
  const role: string = 'teacher'
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Welcome />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/final-register'} element={<FinalRegister />} />
          <Route path={'/forget-password'} element={<ForgetPassword />} />
          <Route path={'/forget-password-with-email'} element={<ForgetPasswordWithEmail />} />
          <Route path={'/reset-password'} element={<ResetPassword />} />
          <Route path={'/subjects'} element={role === 'teacher' ? <TeacherMain /> : <StudentMain />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default Router
