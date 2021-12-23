import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
}
    from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { Register } from '../components/Register';

export const AppRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    )
}
