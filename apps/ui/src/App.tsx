
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { NAVIGATION, BRANDING } from '@/layoutConfig';
import theme from '../theme';

const App = () => {
return (
  <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      // session={session}
      // authentication={AUTHENTICATION}
      theme={theme}
  >
      {/* <SessionContext.Provider value={sessionContextValue}> */}
          <Outlet />
      {/* </SessionContext.Provider> */}
  </ReactRouterAppProvider>
);
}

export default App;