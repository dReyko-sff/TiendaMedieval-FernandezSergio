import productos from "../productos.json";
import "./products.css";

function Products() {
  return (
    <main className="products_main">
      <h2 className="products-title">Bienvenido a Productos</h2>

      <div className="products_grid">
        {productos.map((item) => (
          <div key={item.id} className="product_card">
            <img 
              src={item.img} 
              alt={item.nombre}
              className="product_image"
            />
            <h3 className="product_name">{item.nombre}</h3>
            <p className="product_price">Precio: ${item.precio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
