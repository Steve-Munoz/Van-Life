import Link from 'next/link'
import homeHero from "../../public/images/home-hero.png"


export default function Home() {
  const styling = {
    backgroundImage: `url('${homeHero.src}')`,
    
}
  return (

    <>
    <div style={styling}  className=" home-container bg-center bg-cover min-h-350 text-white py-11 px-6">
      <div className ="bg-[#FF8C38]/40 p-[10px] rounded-md ">
        <h1 className = "font-bold text-3xl opacity-100 leading-10">You got the travel plans, we got the travel vans.</h1>
        <p className = "leading-6 font-bold ">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        
      </div>
      <Link href="/vans"  className= "inline-block ease-in-out hover:translate-x-px hover:translate-y-px text-white text-center font-bold rounded-md cursor-pointer bg-[#FF8C38] no-underline w-[100%] py-[.75rem] px-[1.375rem] my-[27px]">Find your van</Link>

      </div>


    </>
 
  );
}
