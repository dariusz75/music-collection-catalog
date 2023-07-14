import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';

const ProtectedRoute = ({ isAdmin, children }) => {
	const { admin, setAdmin } = useContext(AdminContext);

	if (isAdmin !== admin) {
		return <Navigate to='/' replace />;
	}

	return children;
};

export default ProtectedRoute;
