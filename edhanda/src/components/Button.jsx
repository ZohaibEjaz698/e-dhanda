

const Button = ({text}) => {
  return (
    <button className="bg-accent2 text-primary px-6 font-medium py-2 rounded-full hover:bg-transparent hover:text-accent2 hover:border-2 hover:border-accent2 transition-colors duration-200 ease-linear -md:text-sm">{text}</button>
  )
}

export default Button