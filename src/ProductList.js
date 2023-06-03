import Product from "./Product";

const ProductList = ({items})=>{
    const productItems = items.map((item)=>{
     return <Product product={item} />
    })
    return (
        <div className="product-list">
            {productItems}
        </div>
    )
}
export default ProductList;