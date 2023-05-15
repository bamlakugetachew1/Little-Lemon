import { Link } from "react-router-dom"
function Banner(){
    return <div id="home-section" className="bg-green-600 w-full h-72 mt-5">
            <div className="pt-10 pl-10">
            <h1 className="text-2xl font-mono font-bold text-yellow-500">Little Lemon</h1>
            <h3 className="text-2xl font-mono  text-yellow-500">Chicago</h3>
            <p className="text-blue-50 font-body">We are a family owned Mediterranean restaurant,<br></br> focused on traditional recipes served with a modern twist.</p>
            <button className="mt-3 bg-yellow-500 p-3 rounded-md text-black font-medium hover:scale-105"><Link to="/reserve" className="nav-item">Reserve a Table</Link></button>
          </div>
         </div>
}

export default Banner