import { createContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

export interface AdminContextInterface {
	admin: boolean;
	setAdmin: Dispatch<SetStateAction<boolean>>;
}

const defaultState: AdminContextInterface = {
	admin: false,
	setAdmin: () => {},
};

export const AdminContext = createContext(defaultState);

export type AdminContextProviderProps = {
	children: ReactNode;
};

export const AdminProvider = ({ children }: AdminContextProviderProps) => {
	const [admin, setAdmin] = useState<boolean>(false);
	return (
		<AdminContext.Provider value={{ admin, setAdmin }}>
			{children}
		</AdminContext.Provider>
	);
};
