import React from 'react';
import { render } from 'react-dom';
import { CookiesProvider } from 'react-cookie';

import Link from './components/atoms/Link/Link';

import './index.scss';

const Root = (): JSX.Element => {
  return (
    <CookiesProvider>
      <Link href="www.google.com">test</Link>
    </CookiesProvider>
  );
};

render(<Root />, document.getElementById('root'));
