import {Routes, Route} from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Makeup from './Makeup';
import ProductPage from './ProductPage';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/makeup' element={<Makeup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product:id' element={<ProductPage/>}/>
        </Routes>
    )
}

export default AllRoutes;