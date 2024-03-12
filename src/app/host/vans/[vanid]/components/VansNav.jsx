"use client"

import React from 'react';
import { useParams } from 'next/navigation'

import Link from 'next/link'


function VansNav() {

    const params = useParams()
  return (
    <>
    <Link href = {`/host/vans/${params.vanid}/hostVanDetail`}> Details</Link>
    <br/>
    <Link href = {`/host/vans/${params.vanid}/hostVanPricing`}> Pricing</Link>
    <br/>
    <Link href = {`/host/vans/${params.vanid}/hostVanPhotos`}> Photos</Link>
    

      
    </>
  );
}

export default VansNav;
