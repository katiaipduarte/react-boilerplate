import React from 'react';
import { render } from 'react-dom';
import Link from './components/atoms/Link/Link';

import './index.scss';

const App = (): JSX.Element => {
  return (
    <div className="color">
      <Link href="www.google.com">test</Link>
    </div>
  );
};

render(<App />, document.getElementById('app'));
