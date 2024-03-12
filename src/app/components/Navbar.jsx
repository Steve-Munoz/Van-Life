"use client"
import Link from 'next/link'
import React from 'react';
import {usePathname} from "next/navigation"

export default function Navbar() {
  const navigation = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/host', name: 'Host' },
    { path: '/vans', name: 'Vans' },
    
  ];
  const pathname = usePathname()
  const isActive = (path) => path === pathname;

    return (
      <>
      

       <nav className = "flex h-28 justify-between items-center bg-white pe-2.5 ps-2.5 mx-auto font-[Poppins]">
        <div className =" bg-white m-2">
          <ul className = "flex md:flex-row flex-col items-center gap-[4vw]">
            {navigation.map(({path, name})=>(
              <li key ={path}>
                <Link className = {`${isActive(path) ? 'underline font-[500]' : ""} hover:text-[#161616] hover:underline hover:decoration-2 font-[300] text-[19px]`} href = {path}>
                  <span>{name}</span>
                </Link>

              </li>
            ))}
            {/* <li className = " hover:text-[#4D4D4D] text-[25px] hover:underline hover:decoration-2 font-black mr-auto"><Link href="/"> #VANLIFE</Link></li>
            <li className = " hover:text-[#161616] hover:underline hover:decoration-2 font-[600] text-[19px]"><Link href="/about"> About</Link></li>
            <li className = " hover:text-[#161616] hover:underline hover:decoration-2 font-[600] text-[19px]"><Link href="/host"> Host</Link></li>
            <li className = " hover:text-[#161616] font-[600] hover:underline hover:decoration-2 text-[19px]"><Link href="/vans"> Vans</Link></li>
            */}


          </ul>
        </div>
        
      </nav>
      </>
   
    );
  }
  