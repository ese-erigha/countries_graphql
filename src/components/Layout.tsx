import React, { ReactNode } from 'react';
import Navbar from './Navbar';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="container p-l-80 p-r-80">{children}</div>
    </>
  );
};

export default Layout;
