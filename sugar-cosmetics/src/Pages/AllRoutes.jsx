import {Routes, Route} from 'react-router-dom';
import CartPage from './CartPage';
import Home from './Home'
import Login from './Login'
import Makeup from './Makeup';
import ProductPage from './ProductPage';
import Otp from './Otp';
import UserDetails from './UserDetails';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/makeup' element={<Makeup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/cartpage' element={<CartPage/>}/>
            <Route path='/otp' element={<Otp/>}/>
            <Route path='/user-details' element={<UserDetails/>}/>
        </Routes>
    )
}

export default AllRoutes;