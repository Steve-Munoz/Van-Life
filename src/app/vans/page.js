"use client"

import Link from 'next/link'
import React, {useEffect, useState} from "react"
import "../server"
export default function Vans() {
  const [vans, setVans] = useState([])


  //https://random-data-api.com
  useEffect(()=>{
  
    fetch("/api/vans").then(res=> res.json()).then(data=> setVans(data.vans))
  },[])
  console.log(vans)
  //
  const vanElements = vans.map(van=>(
    <div key = {van.id} className = "van-title">
      <Link href={`/vans/${van.id}`}>
      <img src = {van.imageUrl}/>
      <div className = "van-info"> 
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))
    return (
      <div className = "van-list-container">
        <h1>Explore our van options</h1>
        <div className = "van-list">
          {vanElements}
        </div>
      
      <Link href="/"> Return to Home Page </Link>
      {/* {vans.map((van,index)=>(
        <div index = {index} key = {van.id}><p>{van.name}</p></div>
      ))} */}
      </div>
   
    );
  }
  