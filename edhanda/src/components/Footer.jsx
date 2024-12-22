
const Footer = () => {
  return (
    <>
    <section className="flex items-center justify-between ml-[4rem] mr-[4rem] mt-[4rem] mb-[3rem] -sm:flex-col">
        <h2 className="font-bold text-4xl max-w-[18rem] text-secondary">The <span className="text-accent2">E</span>-Dhanda Approach</h2>
        <h2 className="font-bold text-4xl max-w-[18rem] text-secondary -sm:mt-[3rem]">Your <span className="text-accent2">No.1</span> Place For Products</h2>
    </section>
    <footer className="bg-accent1 h-[27rem] flex justify-evenly -md:flex-col -md:items-center -md:h-[72rem]">
      <div className="flex flex-col items-start mt-[4rem]">
        <img src="/logo.png" className="h-8 -ml-5 mt-10 -xs:h-6"  />
        <p className="mt-[1rem] -ml-5 max-w-sm text-primary -xs:text-sm">E-Dhanda is a comprehensive online marketplace that caters all of your shopping needs. Discover a vast collection of high quality products, from the latest tech gadgets to stylish clothes and home essentials</p>
      </div>
        <div className="flex flex-col items-start mt-[4rem]">
          <h2 className="text-accent4 font-bold text-3xl mb-[0.7rem]">Help</h2>
          <p className="text-accent4 mb-[0.5rem] text-xl">+92 326 5920943</p>
          <p className="text-accent4 mb-[0.5rem] text-xl">+92 312 9402703</p>
          <p className="text-accent4 mb-[0.5rem] text-xl">help@edhanda.com</p>
          <a href="#" className="text-accent4 mb-[0.5rem] text-xl">Returns/Exchanges</a>
        </div>
        <div className="flex flex-col items-start mt-[4rem]">
          <h2 className="text-accent4 font-bold text-3xl mb-[0.7rem]">Shop</h2>
          <p className="text-accent4 mb-[0.5rem] text-xl">Men's Fashion</p>
          <p className="text-accent4 mb-[0.5rem] text-xl">Women's Fashion</p>
          <p className="text-accent4 mb-[0.5rem] text-xl">Winter Clothes</p>
          <a href="#" className="text-accent4 mb-[0.5rem] text-xl">Tech Gadgets</a>
          <a href="#" className="text-accent4 mb-[0.5rem] text-xl">Gift Card</a>
          <a href="#" className="text-accent4 mb-[0.5rem] text-xl">Refer a Friend</a>
        </div>
        <div className="flex flex-col items-start mt-[4rem]">
          <h2 className="text-accent4 font-bold text-3xl mb-[0.7rem]">Privacy Policy</h2>
          <p className="text-accent4 mb-[0.5rem] text-xl">Terms and Condition</p>
          <p className="text-accent4 mb-[0.5rem] text-xl">Privacy Policy</p>
          <p className="text-accent4 mb-[0.5rem] text-xl">Rights</p>
          <a href="#" className="text-accent4 mb-[0.5rem] text-xl">Patents</a>
        </div>
    </footer>
    <div className="bg-accent2 h-[3rem] flex items-center justify-center">
      <p className="font-semibold">&copy; 2025 Edhanda | All rights reserved | Made by <u><a href="https://www.instagram.com/zohaib_3301/" target="_blank">Zohaib</a></u></p>
    </div>
    </>
  )
}

export default Footer