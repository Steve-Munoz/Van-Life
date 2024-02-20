"use client"
import Link from 'next/link'
import React from 'react';

export default function Navbar() {

    return (
      <>
      

       <nav className = "flex h-28 justify-between items-center bg-white pe-2.5 ps-2.5 mx-auto font-[Poppins]">
        <div className =" bg-white m-2">
          <ul className = "flex md:flex-row flex-col items-center gap-[4vw]">
            <li className = " hover:text-[#4D4D4D] text-[25px] hover:underline hover:decoration-2 font-black mr-auto"><Link href="/"> #VANLIFE</Link></li>
            <li className = " hover:text-[#161616] hover:underline hover:decoration-2 font-[600] text-[19px]"><Link href="/about"> About</Link></li>
            <li className = " hover:text-[#161616] font-[600] hover:underline hover:decoration-2 text-[19px]"><Link href="/vans"> Vans</Link></li>
           


          </ul>
        </div>
        
      </nav>
      </>
   
    );
  }
  