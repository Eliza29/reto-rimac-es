import { useAuthStore } from '../store/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);
    //    const isLoggedIn = true

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;