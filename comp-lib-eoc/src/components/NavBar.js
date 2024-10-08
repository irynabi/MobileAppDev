import {NavLink} from 'react-router-dom'
import cx from 'classnames'

//IMPORTANT:LINKS TO PROP NEEDS THE '/path'
const NavBar = () => {
    let isActive
    const classes = cx('text-blue-500', {'font-bold decoration-solid': isActive})
    return(
        <nav className="sticky top-0 overflow-y-scroll flex flex-col item-start">
            <NavLink to="/" className={classes}>Buttons</NavLink>
            <NavLink to="/accordion" className={classes}>Accordion</NavLink>
            <NavLink to="/modal" className={classes}>Modal</NavLink>
        </nav>
    )
}


//WITHOUT STYLING ACTIVE NAVS
// const NavBar = () => {
//     return(
//         <nav className="sticky top-0 overflow-y-scroll flex flex-col item-start">
//             <Link to="/" className="text-blue-500">Buttons</Link>
//             <Link to="/accordion" className="text-blue-500">Accordion</Link>
//             <Link to="/modal" className="text-blue-500">Modal</Link>
//         </nav>
//     )
// }

export default NavBar