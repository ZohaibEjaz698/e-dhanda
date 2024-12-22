import Card from "../components/Card"

const More = () => {
  return (
    <section className="h-[37rem] -xl:h-[54rem] -md:h-[85rem]">
       <div className="flex mt-20">
        <h2 className="text-4xl font-bold ml-20 -lg:text-3xl -xs:ml-10">More To Shop</h2>
        <p className="font-medium ml-[59rem] -xl:ml-[40rem] -lg:ml-[30rem] -md:ml-[15rem] -sm:ml-[10rem]">Explore more of our categories</p>
       </div>
       <div className="flex mt-20 mb-10 ml-48 -md:flex-col -xl:flex-wrap -md:mb-0 -lg:ml-24 -md:mr-60 -md:ml-56 -sm:ml-36 -sm:mr-[12.5rem] -xs:ml-16 -xs:mr-32 ">
            <Card src="/featured2.webp" h2="IPhone X" p1="Apple" p2="Rs. 500000"/>
            <Card src="/more1.webp" h2="Nike Shoes" p1="Nike" p2="Rs. 50000"/>
            <Card src="/featured2.webp" h2="Realme 8" p1="Realme" p2="Rs. 100000"/>
        </div>
    </section>
  )
}

export default More