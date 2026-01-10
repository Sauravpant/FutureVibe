export interface User {
    name: string;
    email: string;
}

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
    loading: boolean;
};