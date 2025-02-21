import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { useUserAuthentication } from './SignIn.api';
import { useSession, type Session } from '@/context/SessionContext';
import { Navigate, useNavigate } from 'react-router';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

const SignIn = () => {
  const theme = useTheme();
  const { session, setSession, loading } = useSession();

  const navigate = useNavigate();

  if (session) {
    return <Navigate to="/" />;
  }

  const signIn: (provider: AuthProvider, formData: FormData) => void = async (provider, formData) => {
    const credentials = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    const userAuth = await useUserAuthentication(credentials);

    if (userAuth.result == 'Success') {
      const userSession: Session = {
        user: {

          email: formData.get('email') as string,
          isAdmin: userAuth.responseObj.responseDataParams.data.isAdmin,
          token: userAuth.responseObj.responseDataParams.data.token,
        },
      };
      setSession(userSession);
      localStorage.setItem('session', JSON.stringify(userSession));
      
      navigate('/', { replace: true });
      return {};
    }

    return { error: userAuth.result == 'Error' || 'Failed to sign in' };


  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false } }}
      />
    </AppProvider>
  );
};

export default SignIn;
