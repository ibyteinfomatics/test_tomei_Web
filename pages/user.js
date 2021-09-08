import { useState } from "react"
export default function () {
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [address,setAddress]= useState('')
  const [pass,setPass]= useState('')
const run=(evt)=>{
  const obj={
    name:name,
    email:email,
    pass:pass,
    address:address
  }
  alert(JSON.stringify(obj))
}
  return (
    <div>
      <form>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} /><br/>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <input type="text" value={address} onChange={e=>setAddress(e.target.value)} /><br/>
        <input type="text" value={pass} onChange={e=>setPass(e.target.value)} /><br/>
            <button onClick={run}>click</button>
      </form>
    </div>
  )
}
