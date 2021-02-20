

import {Link} from "react-router-dom"

function Header(){
return(
    <header>
    <Link to="/biography">Biography</Link>
    <Link to="/tourdates">Tour Dates and Imformation</Link>
    <Link to="/merch">Merch</Link>
    <Link to="/news">News and Updates</Link>
    </header>
)
}


export default Header