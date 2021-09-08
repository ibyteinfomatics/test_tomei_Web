import React from 'react'
import Link from 'next/link';


export default function  Aboutus () {
    return (
        <div>
              <h1>About Us Component:</h1>
              <Link href="/user"> <div>user</div></Link>
              <Link href="/about"> <div>contact</div></Link>

        </div>
    )
}
