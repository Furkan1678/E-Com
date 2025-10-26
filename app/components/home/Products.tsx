import { products } from "@/app/utils/Products"
import ProductCard from "./ProductCard"
import Heading from "../general/Heading"

const Products = () => {
  return (
    <div>
        <Heading text="Tüm Ürünler"/>
       <div className="flex items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10">
         {products.map((product)=>(
          <ProductCard key={product.id} product={product}/>
           ))}
          </div>
    </div>
  )
}

export default Products