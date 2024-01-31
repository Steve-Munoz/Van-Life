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
        className="about-hero-image"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" href={"/vans"}>Explore our vans</Link>
            </div>
        </div>
    </>
 
  );
}