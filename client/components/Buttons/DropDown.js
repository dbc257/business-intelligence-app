import React from "react"
import Link from "next/link"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function DropdownMenu() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    )
}



// import React from "react"
// import Link from "

// export default function Dropdown() {


//     return (
//         <ul className="dropdown-menu">
//             <li className="nav-item">
//                 <Link href="/" activeClassName="active">
//                     <a className="nav-link">Home One</a>
//                 </Link>
//             </li>

//             <li className="nav-item">
//                 <Link href="/index2" activeClassName="active">
//                     <a className="nav-link">Home Two</a>
//                 </Link>
//             </li>

//             <li className="nav-item">
//                 <Link href="/index3" activeClassName="active">
//                     <a className="nav-link">Home Three</a>
//                 </Link>
//             </li>

//             <li className="nav-item">
//                 <Link href="/index4" activeClassName="active">
//                     <a className="nav-link">Home Four</a>
//                 </Link>
//             </li>
//         </ul>
//     )
// }