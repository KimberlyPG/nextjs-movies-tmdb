import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
return (
    <div>
        <Topbar />
        <main>{children}</main>
    </div>
  )
}

export default Layout;