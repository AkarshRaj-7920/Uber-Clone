import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Authorization from './pages/Authorization'
import LandingPage from './components/Auth/LandingPage'
import User from './components/Auth/User/User'
import Captain from './components/Auth/Captain/Captain'
import UserLogin from './components/Auth/User/UserLogin'
import UserRegister from './components/Auth/User/UserRegister'
import CaptainLogin from './components/Auth/Captain/CaptainLogin'
import CaptainRegister from './components/Auth/Captain/CaptainRegister'
import Home from './pages/Home'
import UserProtectWrapper from './components/Others/UserProtectWrapper'
import UserLogout from './components/Auth/User/UserLogout'
import UserHome from './components/Home/UserHome'
import CaptainHome from './components/Home/CaptainHome'
import CaptainProtectWrapper from './components/Others/CaptainProtectWrapper'
import CaptainLogout from './components/Auth/Captain/CaptainLogout'
import CaptainRiding from './components/Auth/Captain/CaptainRiding'
import Riding from './pages/Riding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Authorization />}>
          <Route index element={<LandingPage />} />

          <Route path='users' element={<User />}>
            <Route index element={<Navigate to='login' replace />} />
            <Route path='login' element={<UserLogin />} />
            <Route path='register' element={<UserRegister />} />
            <Route path='logout' element={
              <UserProtectWrapper>
                <UserLogout />
              </UserProtectWrapper>} />
          </Route>

          <Route path='captains' element={<Captain />}>
            <Route index element={<Navigate to='login' replace />} />
            <Route path='login' element={<CaptainLogin />} />
            <Route path='register' element={<CaptainRegister />} />
            <Route path='logout' element={
              <CaptainProtectWrapper>
                <CaptainLogout />
              </CaptainProtectWrapper>
            } />
          </Route>
        </Route>

        <Route path='/home' element={<Home />} >
          <Route index element={<Navigate to='user-home' replace />} />
          <Route path='user-home' element={
            <UserProtectWrapper>
              <UserHome />
            </UserProtectWrapper>} />

          <Route path='captain-home' element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          } />
        </Route>

        <Route path='/riding' element={<Riding />}>
          <Route path='captain' element={<CaptainRiding />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App