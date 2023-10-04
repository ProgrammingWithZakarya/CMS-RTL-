import Home from "./Pages/Home/Home";
import Products from './Pages/Products/Products'
import Orders from './Pages/Orders/Orders'
import Users from './Pages/Users/Users'
import Comments from './Pages/Comments/Comments'
import Offs from './Pages/Offs/Offs'
import ListProducts from "./Pages/ListProducts/ListProducts";
let routes =[
    {path :"/" , element : <Home />},
    {path : '/products' , element : <Products /> ,children: [
        {path:"product-list", element : <ListProducts />}
    ]},
    {path : '/Orders' , element : <Orders />} ,
    {path :"/users" , element : <Users /> },
    {path :"/comments" , element : <Comments /> },
    {path : "/offs" , element : <Offs />}
]
export default routes