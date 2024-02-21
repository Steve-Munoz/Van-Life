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

      //   .about-page-content {
      //     padding-inline: 23px;
      //     color: #161616;
      //     margin-bottom: 55px;
      // }
      
      // .about-page-content h1 {
      //     line-height: 38px;
      // }
      
      // .about-page-content p {
      //     line-height: 22px;
      // }
      
      // .about-page-cta {
      //     background-color: #FFCC8D;
      //     color: #161616;
      //     padding-inline: 32px;
      //     padding-bottom: 32px;
      //     margin-inline: 27px;
      //     border-radius: 5px;
      // }
      
      // .about-page-cta h2 {
      //     margin: 0;
      //     padding-block: 37px;
      // }
      
      // .about-page-cta .link-button {
      //     background-color: #161616;
      //     color: white;
      //     border-radius:
      />
            <div className="ps-[23px] pe-[23px] text-[#161616] mb-[55px]">
                <h1 className = "leading-[38px] py-[10px] font-bold text-2xl">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className = "leading-[22px] pb-[5px]">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className = "leading-[22px]">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta bg-[#FFCC8D] text-black ps-[32px] pe-[32px] pb-[32px] ms-[27px] me-[27px] rounded">
                <h2 className = "m-0 ps-[37px] pe-[37px] py-[10px] font-bold text-[40px]">Your destination is waiting.<br />Your van is ready.</h2>
                <Link className=" rounded-[10px] font-bold inline-block text-center py-[.75rem] px-[1.375rem] bg-[#161616] text-white" href={"/vans"}>Explore our vans</Link>
            </div>
        </div>
    </>
 
  );
}