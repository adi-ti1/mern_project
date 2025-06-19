import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './components/signinForm';
import LoginPage from './components/login';
import Home from './components/home';
import AppLayout from './layout/appLayout';
import Dashboard from './pages/dashboard';

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const handleLoginSuccess = (user) => {
    setUserDetails(user);
  };

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
