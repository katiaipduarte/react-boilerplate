import React, { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

const App = (): JSX.Element => {
  const cookie_key = 'COOKIE';

  const [cookies, setCookie, removeCookie] = useCookies(['`${cookie_key}']);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    const get = cookies[cookie_key];
  }, []);

  const update = (): void => {
    setCookie(cookie_key, []);
  };

  const clear = (): void => {
    removeCookie(cookie_key);
  };
  return (
    <CookiesProvider>
      <h2>App</h2>
    </CookiesProvider>
  );
};

export default App;
