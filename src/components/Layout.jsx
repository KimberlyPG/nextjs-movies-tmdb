import React from 'react'
import Topbar from './Topbar'

const Layout = ({ children }) => {
return (
    <div>
        <Topbar />
        {children}
    </div>
  )
}

export default Layout;