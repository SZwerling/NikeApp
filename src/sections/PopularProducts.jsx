import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className='flex flex-col justify-start gap-5'>
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Approach the upper echelons of grace with our top-flight footware.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap:14">
        {products.map((product) => {
          //check out how we send these props with the spread operator!! Each product is an object.
          return <PopularProductCard key={product.name} {...product} />
        })}
      </div>
    </section>
  )
}

export default PopularProducts


// {
//   imgURL: shoe4,
//   name: "Nike Air Jordan-01",
//   price: "$200.20",
// },