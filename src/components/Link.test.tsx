import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('<Link /> component Unit Test', () => {
  it('Renders link to Google', () => {
    const link = shallow(<Link href="http://google.com">Link to Google</Link>);
    expect(link).toMatchSnapshot();
  });

  it('Renders link to Google with classname', () => {
    const link = shallow(
      <Link href="http://google.com" className="my-link-class">
        Link to Google
      </Link>,
    );
    expect(link).toMatchSnapshot();
  });
});
