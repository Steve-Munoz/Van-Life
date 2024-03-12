"use client"

import React,{useState, useEffect} from 'react';
import { useParams } from 'next/navigation'
import Link from 'next/link'
import "../../../server"

export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = useState(null)
    
    const params = useParams()
   

    useEffect(()=>{
        fetch(`/api/vans/${params.vanid}`).then(res=> res.json()).then(data => setCurrentVan(data.vans))
    },[])

    console.log(params)

    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    return(
        <>
         <section>
            <Link
                href = {`/host/vans/${params.vanid}`}
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}