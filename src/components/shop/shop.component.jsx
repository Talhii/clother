import { useContext } from "react";
import { ProductContext } from "../../context/product.context";

const Shop = () => {
  const products = useContext(ProductContext)
  return (
    <div>
      {products.map((shop) => {
        return (
          <div key={shop.id}>
            <h1>{shop.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
