import React from 'react'
import ProductCard from '../product-card/ProductcardCompoment';
import './catagorypreview.scss';

const CatagoryPreview = ({title,products}) => {
  return (
    <div className="category-preview-container">
        <h2>
            <span className="title">{title.toUpperCase()}</span>
        </h2>
        <div className="preview">
            {
                products.filter((_,idx)=> idx<4)
                .map((product)=><ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    </div>
  )
}
export default CatagoryPreview;
