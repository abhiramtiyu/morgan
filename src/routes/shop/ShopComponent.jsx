import { Route,Routes } from 'react-router-dom';
import CatagoriesPreview from '../catagoriespreview/CatagoriesReviewComponent';
import CatagoryComponent from '../catagory/CatagoryComponent';
import './shop.style.scss'

const ShopComponent=({})=>{
return(
 <Routes>
    <Route index element={<CatagoriesPreview/>}/>
    <Route path=':category' element={<CatagoryComponent />} />
 </Routes>
)
}
export default ShopComponent;