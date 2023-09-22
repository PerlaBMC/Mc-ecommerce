import { useContext } from "react";
import ProductContext from "../context/productContext";
import { Link } from "react-router-dom"

const ProductsPage = () => {
  const { getProducts, products } = useContext(ProductContext);

  const handleClick = async () => {
    await getProducts();
  }

  const handleAddProduct = (id) => {
    console.log (id)
  }
  
  return (
    <>

  <main className="row">
    <article className="col">
      <button type="button" onClick={handleClick} />
    </article>
  </main>

  <div className="row row-cols-1 row-cols-md-3 g-4">
{
products.map ((product)=>(
  <div key={product.id} className="col">
  <div className="card">
    <img src={product.img} className="card-img-top" alt={product.nombre} />
    <div className="card-body">
      <h5 className="card-title">{product.nombre}</h5>
      <p className="card-text">{product.precio}</p>
      <button className="bt btn-warning btn-lg"
      onClick={()=>handleAddProduct(product.id)}>    
      </button>
      <button>
      <Link 
       to={`/products/${product.id}`}
       className="btn btn-info btn-lg">  
       </Link>
        </button>                           
    </div>
  </div>
</div>
))

}
</div>

    </>
  )
}

export default ProductsPage