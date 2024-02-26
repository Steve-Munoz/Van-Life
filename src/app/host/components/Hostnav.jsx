"use client"
import Link from 'next/link'
import React from 'react';

export default function Hostnav() {

    return (
      <>
      

       <nav className = "flex h-10 justify-between items-center bg-orange-200 pe-2.5 ps-2.5 mx-auto font-[Poppins]">
        <div className =" m-2">
          <ul className = "flex md:flex-row flex-col items-center gap-[4vw]">
            <li className = " hover:text-[#161616] hover:underline hover:decoration-2 font-[600] text-[17px]"><Link href="/host"> Host</Link></li>
            <li className = " hover:text-[#161616] font-[600] hover:underline hover:decoration-2 text-[17px]"><Link href="/host/income"> Income</Link></li>
            <li className = " hover:text-[#161616] hover:underline hover:decoration-2 font-[600] text-[17px]"><Link href="/host/income/reviews"> Reviews</Link></li>
           


          </ul>
        </div>
        
      </nav>
      </>
   
    );
  }