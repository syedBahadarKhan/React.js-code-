import {Link, Outlet} from "react-router-dom"
function Product () {
    return (
        <div>
            <h2>Welcome to the Product page</h2>
            <nav>
                <Link to="items">Items</Link>|  
                <Link to="price">Price</Link>
            </nav>
            <Outlet />
        </div>
    )
 }
 export default Product