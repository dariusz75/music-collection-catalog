import { type } from 'os';
import { ReactNode, createContext } from 'react';

type AdminContextProviderProps = {
	children: ReactNode;
};

const isAdmin = { isAdmin: false };
export const AdminContext = createContext(isAdmin);

export const AdminContextProvider = ({
	children,
}: AdminContextProviderProps) => {
	return (
		<AdminContext.Provider value={isAdmin}>{children}</AdminContext.Provider>
	);
};
