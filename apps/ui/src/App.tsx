
import { Outlet, useNavigate } from 'react-router';
import SessionContext, { type Session } from '@/context/SessionContext';
import { useState, useMemo } from 'react';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { NAVIGATION, BRANDING } from '@/layoutConfig';
import theme from '../theme';
import { Authentication } from '@toolpad/core';
import SignIn from './pages/Sign-in/SignIn';

const App = () => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();    

    const sessionContextValue = useMemo(
        () => ({
            session,
            setSession,
            loading,
        }),
        [session, loading],
    );

    
    const AUTHENTICATION: Authentication = useMemo(() => {
        return {
            signIn: SignIn,
            signOut: () => {
                localStorage.clear();
                setSession(null);
                navigate('/sign-in');
            },
        };
    }, []);
    
return (
  <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      session={session}
      authentication={AUTHENTICATION}
      theme={theme}
  >
      <SessionContext.Provider value={sessionContextValue}>
          <Outlet />
      </SessionContext.Provider>
  </ReactRouterAppProvider>
);
}

export default App;