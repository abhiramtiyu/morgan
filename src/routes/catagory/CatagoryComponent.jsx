
import { useContext,useState,useEffect,Fragment} from 'react'
import React from 'react'
import './catagory.style.scss'
import { useParams } from 'react-router-dom'
import { CatagoriesContext } from '../../context/catagories.context'
import ProductCard from '../../component/product-card/ProductcardCompoment'

const CatagoryComponent = () => {
    const { category } = useParams();
  const { categoriesMap } = useContext(CatagoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
    console.log(products)
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map((product) => {
            return(
            <ProductCard key={product.id} product={product} />
          )})}
      </div>
    </Fragment>
  );
}
export default CatagoryComponent;