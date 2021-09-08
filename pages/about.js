import React from 'react'
import {useState} from 'react'
import Image from 'next/image'
import ct from '../styles/Customstyle.module.css'


import Link from 'next/link'
import logo from '../public/images/Logo.png'


export default function about() {
  const [pic,setpic]=useState(null);

  const handleChange=(evt)=>{
   if(evt.target.files && evt.target.files[0]){
        let img=evt.target.files[0];
      let dta=URL.createObjectURL(img);
       setpic(dta)
   }
  }
    return (
        <div>
              <Image src={logo} alt="Logo" />
            <h1>About page</h1>
            <div className={ct.profile_upload}>
            <img src={pic} alt="imgahes"  style={{width:'150px',height:'150px',borderRadius:'100%'}}/>
            <input type ="file" onChange={handleChange} />
  </div>

          

        </div>
    )
}
