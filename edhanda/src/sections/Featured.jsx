import Button from "../components/Button"
import Card from "../components/Card"


const Featured = () => {
  return (
   <section className="flex flex-col items-center bg-accent3 h-[40rem] -md:h-[85rem]">
        <h3 className="font-semibold text-xl text-accent2 mb-[1rem] mt-10">Featured</h3>
        <h2 className="font-bold text-4xl text-primary -sm:text-3xl">Our Top Selling Items</h2>
        <p className="mt-[1rem] max-w-lg text-center text-accent4 -xs:text-sm">Here are our most selling products.</p>
        <div className="flex mt-10 mb-10 -md:flex-col -md:mb-0">
            <Card src="/featured2.webp" h2="IPhone X" p1="Apple" p2="Rs. 500000"/>
            <Card src="/more1.webp" h2="Nike Shoes" p1="Nike" p2="Rs. 50000"/>
            <Card src="/featured2.webp" h2="Realme 8" p1="Realme" p2="Rs. 100000"/>
        </div>
        <Button text="Shop More"/>
   </section>
  )
}

export default Featured