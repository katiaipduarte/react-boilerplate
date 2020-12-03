import React from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import './index.scss';

const App = (): JSX.Element => {
  return (
    <div className="color">
      <Hello compiler="parcel" framework="123" />
    </div>
  );
};

render(<App />, document.getElementById('app'));
