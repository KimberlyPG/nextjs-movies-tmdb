import { ReactNode, FC } from 'react'
import Topbar from './Topbar'

/**
 * app wrapper with topbar
 * @param children whole app
 */

interface LayoutProps{
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
return (
    <div>
        <Topbar />
        {children}
    </div>
  );
};

export default Layout;
