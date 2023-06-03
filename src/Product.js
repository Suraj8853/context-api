const Product = ({product})=>{
    return (
        <div className="product-name">
          <img src={product.image} alt="desc" />
          <div className="product-content">
            <div className="product-details">
            <label>{product.Name}</label>
            <label>Price : {product.Price}</label>
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
    )
}
export default Product;