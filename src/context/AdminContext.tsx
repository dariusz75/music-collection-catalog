import {
	ReactNode,
	createContext,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

export type Admin = {
	admin: boolean;
};

export interface AdminContextInterface {
	admin: boolean;
	setAdmin: Dispatch<SetStateAction<Admin>>;
}

const defaultState = {
	admin: false,
	setAdmin: (admin: Admin) => {},
} as AdminContextInterface;

export const AdminContext = createContext(defaultState);

export type AdminContextProviderProps = {
	children: ReactNode;
};

export const AdminContextProvider = ({
	children,
}: AdminContextProviderProps) => {
	const [admin, setAdmin] = useState<Admin>({ admin: false });
	return (
		<AdminContext.Provider value={{ admin, setAdmin }}>
			{children}
		</AdminContext.Provider>
	);
};
