import Link from 'next/link'
import React from 'react';

export default function Navbar() {
    return (
      <>

       
       <Link className="site-logo" href="/"> #VANLIFE</Link>
       <Link href="/about"> About</Link>
       <Link href="/vans"> Vans</Link>
      
      </>
   
    );
  }
  