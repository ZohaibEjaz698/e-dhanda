

const Card = ({src,h2,p1,p2}) => {
  return (
    <section className="h-[20rem] rounded-lg bg-accent4 flex flex-col items-start ml-20 -md:mb-10 -md:ml-0 cursor-pointer -xl:mb-10">
        <img src={src} className="w-[18rem] rounded-t-lg" />
        <h2 className="font-bold text-2xl text-secondary ml-4 mt-2">{h2}</h2>
        <p id="aboutP" className=" ml-4">{p1}</p>
        <p id="aboutP" className=" ml-4">{p2}</p>
    </section>
  )
}

export default Card