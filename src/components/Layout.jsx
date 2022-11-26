import React from 'react'
import Topbar from './Topbar'

/**
 * app wrapper with topbar
 * @param children whole app
 */

const Layout = ({ children }) => {
return (
    <div>
        <Topbar />
        {children}
    </div>
  );
};

export default Layout;
