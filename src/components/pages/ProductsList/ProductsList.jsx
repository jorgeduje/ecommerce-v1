import styles from "./ProductList.module.css";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";

const ProductsList = ({ items }) => {
  return (
    <div className={styles.categoryContainer}>
      {items.map((product) => (
        <ProductCardContainer product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductsList;