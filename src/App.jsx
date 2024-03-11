import { useState } from "react";
import { product as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";

function App() {
  const [products] = useState(initialProducts)
  const[filters,setFilter] = useState({
    category: 'all',
    minPrice: 0,
})

  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default App;
