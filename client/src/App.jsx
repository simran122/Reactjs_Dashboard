import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './Theme'
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import { Routes, Route, } from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp';
import UserAuthContextProvider from './UserAuthContext';
import Dashboard from './components/Dashboard'
import ProtectedRoute from './ProtectedRoute';
import ResetPassword from './components/ResetPassword';
const responsiveTheme = responsiveFontSizes(Theme)
function App() {


  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />


        <UserAuthContextProvider>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          </Routes>

        </UserAuthContextProvider>

      </ThemeProvider>
    </>
  )
}

export default App
