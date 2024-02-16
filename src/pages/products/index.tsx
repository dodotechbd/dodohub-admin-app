import { ProductsContainer } from "@containers/Products";
import { Layout } from "@enums";

const Products = () => {
  return <ProductsContainer />;
};

Products.layout = Layout.SIDEBAR;

export default Products;
