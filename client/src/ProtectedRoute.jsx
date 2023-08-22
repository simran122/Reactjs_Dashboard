import React from 'react'
import { Navigate, } from 'react-router-dom';
import { useUSerAuth } from './UserAuthContext';
const ProtectedRoute = ({ children }) => {
    let { user, loading } = useUSerAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/" />
    }
    return children;
};

export default ProtectedRoute;