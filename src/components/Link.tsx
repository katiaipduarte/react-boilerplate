import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode | JSX.Element;
  className?: string;
}

const Link = (props: LinkProps): JSX.Element => {
  const { href, children, className } = props;

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
