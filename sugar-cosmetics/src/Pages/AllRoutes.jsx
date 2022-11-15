import {Routes, Route} from 'react-router-dom';
import CartPage from './CartPage';
import Home from './Home'
import Login from './Login'
import Makeup from './Makeup';
import ProductPage from './ProductPage';
import Otp from './Otp';
import UserDetails from './UserDetails';
import Payment from './Payment';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/makeup' element={<Makeup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product/01' element={<ProductPage/>}/>
            <Route path='/cartpage' element={<CartPage/>}/>
            <Route path='/otp' element={<Otp/>}/>
            <Route path='/user-details' element={<UserDetails/>}/>
            <Route path='/payment' element={<Payment/>}/>
        </Routes>
    )
}

export default AllRoutes;