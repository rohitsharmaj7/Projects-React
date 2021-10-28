import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
   return(
       <div className="ui secondary ponting menu">
           <Link className="item" to="/">Streaming App</Link>
           <div className="right menu">
             <Link className="item" to="/">All Streams</Link>
           </div>
       </div>
   )
}

export default Header;