import React from 'react';
import Auxx from '../../hoc/Auxx';

import './layout.css'

const Layout = (props) =>{
   return(
       <Auxx>
           <div>Toolbar, Sidedrawer, Backdrop</div>
           <main className="content">
               {props.children}
           </main>
       </Auxx>

   )
}
export default Layout;