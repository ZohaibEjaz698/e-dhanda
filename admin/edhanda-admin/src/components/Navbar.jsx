

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between bg-accent3 px-[4%] py-2">
      <img src="/logo.png" className="w-[max(10%,80px)]" />
      <button onClick={() => setToken("")} className="bg-accent2 text-primary px-6 font-medium py-2 rounded-full hover:bg-transparent hover:text-accent2 hover:border-2 hover:border-accent2 transition-colors duration-200 ease-linear">Logout</button>
    </div>
  )
}

export default Navbar