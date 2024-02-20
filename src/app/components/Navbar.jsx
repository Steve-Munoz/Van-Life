"use client"
import Link from 'next/link'
import React,{useState} from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
    return (
      <>
      {/* header a {
    text-decoration: none;
    color: #4D4D4D;
    font-weight: 600;
    padding: 5px 20px;
}

header a:hover {
    color: #161616;
    text-decoration: underline;
} */}

      

       <nav className = "flex h-28 justify-between items-center bg-white pe-2.5 ps-2.5 mx-auto font-[Poppins]">
        <div className =" bg-white m-2">
          <ul className = "flex md:flex-row flex-col items-center gap-[4vw]">
            <li className = " hover:text-[#4D4D4D] text-[25px] hover:underline hover:decoration-2 font-black mr-auto"><Link href="/"> #VANLIFE</Link></li>
            <li className = " hover:text-[#161616] hover:underline hover:decoration-2 font-[600]"><Link href="/about"> About</Link></li>
            <li className = " hover:text-[#161616] font-[600] hover:underline hover:decoration-2"><Link href="/vans"> Vans</Link></li>
            <li>
              {/* <button onClick={handleClick} 
              className="flex flex-col justify-center items-center">
                <span className={`bg-steel-500 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${isOpen ? 
                'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`} >
                  
                </span>
                <span className={`bg-steel-500 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                'opacity-0' : 'opacity-100'
                }`} >
                </span>
                <span className={`bg-steel-500 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${isOpen ? 
                '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`} >
                </span>   
               

              </button> */}
            </li>


          </ul>
        </div>
        
      </nav>
      </>
   
    );
  }
  