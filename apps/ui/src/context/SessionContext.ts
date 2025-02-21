import { createContext, useContext } from 'react';

export interface Session {
    user: {
       email?: string;
       isAdmin?: boolean;
       token: string;   
    };
}

interface SessionContextType {
    session: Session | null;
    setSession: (session: Session) => void;
    loading: boolean;
}

const SessionContext = createContext<SessionContextType>({
    session: null,
    setSession: () => {},
    loading: true,
});

export default SessionContext;

export const useSession = () => useContext(SessionContext);
