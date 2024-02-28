"use client"
import Link from 'next/link'
import React,{useState} from 'react';
import {usePathname} from "next/navigation"


export default function Hostnav() {
  // function useActivePath(){
  
  //   const pathname = usePathname()
  //   console.log(pathname)
  //   const checkActivePath = (path) =>{
  //     if(path === '/' && pathname !== path){
  //       return false
  //     }
  //     return pathname.startsWith(path)
      
      
  //   };
    
  //   return checkActivePath
    
  // }


  // const checkActivePath = useActivePath();

  const navigation = [
    { path: '/host', name: 'Host' },
    { path: '/host/income', name: 'Income' },
    { path: '/host/income/reviews', name: 'Reviews' },
    
  ];
  const pathname = usePathname()
  const isActive = (path) => path === pathname;


return(
  <>
  <nav className ="flex h-10 justify-between items-center bg-orange-200 pe-2.5 ps-2.5 mx-auto font-[Poppins]">
      <ul className = "flex md:flex-row flex-col items-center gap-[4vw]">
        {navigation.map(({ path, name }) => (
          <li key={path}>
            {/* <Link className = {`${checkActivePath(href) ? 'target:bg-blue-600' : ""} hover:text-[#161616] hover:underline hover:decoration-2 text-[17px]`} href={href}>
              <span>{name}</span>
            </Link> */}
            <Link className = {`${isActive(path) ? 'underline font-medium' : ""} underline-offset-1 text-[17px]`} href = {path}>
              <span>{name}</span>
            </Link>
          </li> 
        ))}
      </ul>
    </nav>
  </>
);
    // return (
    //   <>
      

    //    <nav className = "flex h-10 justify-between items-center bg-orange-200 pe-2.5 ps-2.5 mx-auto font-[Poppins]">
    //     <div className =" m-2">
    //       <ul className = "flex md:flex-row flex-col items-center gap-[4vw]">
    //         <li className = " hover:text-[#161616] hover:underline hover:decoration-2 text-[17px]"><Link className = {({isActive})=> isActive ? "font-[600] bg-red" : ""}href="/host"> Host</Link></li>
    //         {/* <li className = {`${isActive ? "font-[600]" : ""} hover:text-[#161616] hover:font-[600] hover:underline hover:decoration-2`}><Link onClick = {()=>toggleIsActive()}href="/host"> Host</Link></li> */}
    //         <li className = " hover:text-[#0e0b0b] hover:font-[600] hover:underline hover:decoration-2 text-[17px]"><Link href="/host/income"> Income</Link></li>
    //         <li className = " hover:text-[#161616] hover:underline hover:decoration-2 hover:font-[600] text-[17px]"><Link href="/host/income/reviews"> Reviews</Link></li>
           


    //       </ul>
    //     </div>
        
    //   </nav>
    //   </>
   
    // );
  }