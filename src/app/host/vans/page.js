
"use client"
import React, {useEffect, useState} from "react"
import Link from 'next/link'
import "../../server"

export default function HostVans() {
    const [vans, setVans] = useState([])

    const onClickButton = () =>{
        console.log("clicked")
        console.log(vans)
    }

    // useEffect(() => {
    //     fetch("/api/host/vans")
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans))
            
    // }, [])

    useEffect(()=>{
  
        fetch("/api/vans").then(res=> res.json()).then(data=> setVans(data.vans))
      },[])
     
     const filteredVans = vans.filter(van => van.hostID.includes("123"))

    const hostVansEls = filteredVans.map(van => (
        <Link
            href={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                    <p>{van.hostID}</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
            <button className = "bg-sky-500" onClick = {()=> onClickButton()}>Owners Vans</button>
        </section>
    )
}