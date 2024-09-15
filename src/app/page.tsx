
"use client"


import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [number, setnumber] = useState(1)

  let cal = () => {
    setnumber(number+1)
  }




  return (
   <div>
   
  <h1 className="ml-5">{number}</h1>
  <button onClick={cal} className="p-6 bg-slate-500 ml-6" >click here</button>
   </div>
  );
}
