
import { Route,Routes} from 'react-router-dom';
import Home from './routes/home/Home';
import { Authentication } from './routes/authentication/Authentication.component';
import Navigation from './routes/navigation/navigation.component';
import ShopComponent from './routes/shop/ShopComponent';
import CheckoutComponent from './component/checkout/checkoutComponent';
const App=()=>{
return(
      <>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop/*' element={<ShopComponent />} />
          <Route path='checkout' element={<CheckoutComponent/>}/>
          <Route path='Auth' element={<Authentication/>}/>
        </Route>
      </Routes>
      </>
    )
}

export default App;