import React from 'react';

// class NavBar extends Component {
//     render() { 
//         return ( 
//         <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//             Navbar
//             <span className="badge badge-pill badge-secondary m-1">{this.props.totalCounters}</span>
//             </a>
//         </nav>
//         );
//     }
// }

// stateless functional component: shortcut : sfc
// some developer prefer it it only returing some html
//  we pass props and react will automatically pass property for props
/*
Instead of passing props and using props.totalCounters , we can use object
destructuring and only use property name to reference is like 'totalCounters'
without 'props.' .To do this we pass property like: const NavBar =({totalCounters})=>.....
instead of: const NavBar = (props) => { ...
use: const NavBar = ({totalCounters}) => {..... 
This technique is called object destructuring
*/
const NavBar = ({totalCounters}) => {
    console.log('App-navbar rendered')
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
            Navbar
            <span className="badge badge-pill badge-secondary m-1">
                {totalCounters}
            </span>
            </a>
        </nav>
     );
}

export default NavBar;