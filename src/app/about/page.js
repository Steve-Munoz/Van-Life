import Link from 'next/link'
import bgImg from "../../../public/images/about-hero.png"
import Image from 'next/image'

export default function About() {
  return (
    <>
   <div className="about-page-container">
    <Image
        src={bgImg}
        alt="home picture of van"
        className="about-hero-image w-100 h-96 "
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            <div className="about-page-content ps-6 text-[#161616] mb-56">
                <h1 className = "leading-10">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className = "leading-5">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className = "leading-5">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta bg-[#FFCC8D] text-black ps-8 pb-8 ms-7 rounded">
                <h2 className = "m-0 ps-9 pe-9">Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="inline-block text-center bg-[#161616] text-white border-8" href={"/vans"}>Explore our vans</Link>
            </div>
        </div>
    </>
 
  );
}