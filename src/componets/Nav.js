import handleClick from "../utils/HandleClick";
import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
            <ul className="flex justify-center md:justify-end gap-2 md:gap-3 mt-3  cursor-pointer font-body font-medium">
                <li className="hover:text-slate-400"><button onClick={()=>{handleClick('home')}}>Home</button></li>
                <li className="hover:text-slate-400"><button onClick={()=>{handleClick('contact')}}>Contactus</button></li>
                <li className="hover:text-slate-400"><button onClick={()=>{handleClick('menu')}}>menu</button></li>
                <Link  to="/reserve" className="nav-item hover:text-slate-400">Reserve</Link>
            </ul>
        </nav>
    );
}


export default Nav