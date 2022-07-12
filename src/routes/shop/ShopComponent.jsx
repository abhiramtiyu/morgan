import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../component/product-card/ProductcardCompoment";
import './shop.style.scss'

const ShopComponent=()=>{
const {products}  = useContext(ProductContext)
return(
    <>
        <div className="products-container">{
            products.map((product)=>{
                return(
                    <ProductCard key={product.id} product={product}></ProductCard>
                )
            })
        }</div>
    </>
)
}
export default ShopComponent;