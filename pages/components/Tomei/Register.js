import Head from 'next/head'
import Image from 'next/image'
import profilepic  from '../../../public/images/Avatar.png'
import logo from '../../../public/images/Logo.png'
import arrow from '../../../public/images/arrow-right.png';
import { useState,useEffect } from 'react';
// import styles from '../styles/globals.css'
// import './css/responsive.css';

// import  style from '../styles/style.modules.css'
// import ft from '../styles/Home.module.css'
import ct from '../../../styles/Customstyle.module.css'




export default function Register() {
    const [step,setStepValue]=useState(ct.Active)
    const [step1,setStep1Value]=useState(ct.Active1)
    const [step2,setStep2Value]=useState(ct.Active1)
    const [profileimg,setprofileimg]=('')
    const [data,setData]=useState([]);
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [cnfpass,setCnfPass]=useState('')

    const userDetails={
        username:name,
      email:email,
      password:pass,
      confirmPassword:cnfpass
     } 



            
         

const handleSubmit=()=>{
    // request options
    console.log(userDetails,"mk...")
const options = {
    method: 'POST',
    body: JSON.stringify(userDetails),
    headers: {
        'Content-Type': 'application/json'
    }
}

// send POST request
fetch('http://192.168.0.1:8000/users/register', options)
    .then(res => res.json())
    .then(res => console.log(res,"response...."));
}

    // const nextstep=()=>{

    //     if (name==='') {
    //         alert("fill  your name")
    //     } else if (email==='') {
    //         alert("pls fill your email")
    //     } else if (pass==='') {
    //         alert("pls fill the pass")
    //     } else if (cnfpass==='') {
    //         alert("do not match pass")
    //     } else {
            
    //         setStepValue(ct.Active1)
    //          setStep1Value(ct.Active)
    //         setStep2Value(step)
    //         alert("done")
    //     }
        
       
        

    //     // else{

    //     //     setStepValue(ct.Active1)
    //     //     setStep1Value(ct.Active)
    //     //     setStep2Value(step)
    //     //     alert("done")
    //     // }
        
                 
              
    // }
    console.log(data,"data from api....")
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          let image= URL.createObjectURL(img)
          console.log(image,"img.....")
        //   setprofileimg(image);

        }

      };
   
  return(
	  <>
	   <Head>
	   <title>My Cart</title>
	   <meta charset="utf-8" />
	   <meta name="viewport" content="width=device-width, initial-scale=1" />
	   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
	   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	   <link rel="stylesheet" type="text/css" href="css/style.css" />
	    <link rel="stylesheet" type="text/css" href="" />
      </Head>
	  
	  {/* <Register /> */}
	  <section className="page_wrapper">
            <div className="container">
                <div className={ct.inner_wrapper}>
                    <div className="Logo">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className={ct.step}> 
                        <ul className={ct.tab_list}>
                            <li className={step} id="l1">
                                <div  className={ct.circle}>
                                    <a href="javascript:void(0)">
                                        1
                                    </a>
                                </div>
                            </li>
                            <li className={step1}>
                                <div className={ct.circle}>
                                    <a href="javascript:void(0)">
                                        2
                                    </a>
                                </div>
                            </li>
                            <li className="">
                                <div className={ct.circle}>
                                    <a href="javascript:void(0)">
                                        3
                                    </a>
                                </div>
                            </li>
                            <li className="">
                                <div className={ct.circle}>
                                    <a href="javascript:void(0)">
                                        4
                                    </a>
                                </div>
                            </li>
                            <li className="">
                                <div className={ct.circle}>
                                    <a href="javascript:void(0)">
                                        5
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className={ct.step_data} id="">
                            <ul>
                                <li className={step} id="l1"><span>Step 1:</span>Create Your Account Password</li>
                                <li className={step2}><span>Step 2:</span>Personal Information</li>
                                <li><span>Step 3:</span>Employment Details</li>
                                <li><span>Step 4:</span>Upload Documents</li>
                                <li><span>Step 5:</span>Complete</li>
                            </ul>
                        </div>
                    </div>
                    <div className={ct.create_account}>
                        <h4 className={ct.form_title}>
                            Create Your Account
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <form className={ct.profile}>
                            <div className="row">
                                <div className="col-md-2">
                                    <div className={ct.profile_coln_left}>
                                        <div className={ct.profile_upload}>
                                            <label classNameName="">

                                            <Image src={profilepic} 
                                            alt="Profile" />Upload
                                            <input type="file" id="myfile" name="myfile" className="form-control" className={ct.input_type}   /></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 col-sm-12 col-12">	
                                    <div className={ct.proifle_coln_right}>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className={ct.Input}>
                                                    <label for="fname">Name</label>
                                                    <input type="text" value={name} name="fname" className="form-control" onChange={(e)=>setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className={ct.Input}>
                                                    <label for="fname">Email</label>
                                                    <input type="text" name="email" value={email} className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className={ct.Input}>
                                                    <label for="fname">Password</label>
                                                    <input type="Password" name="password" value={pass} className="form-control" onChange={(e)=>setPass(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className={ct.Input}>
                                                    <label for="fname">Confirm Password</label>
                                                    <input type="Password" name="cnfp" value={cnfpass} className="form-control" onChange={(e)=>setCnfPass(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={ct.btn_style_1}>
                                            <button type="button" className={ct.btn} onClick={handleSubmit} >
                                               Save & Next
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25.03" height="44.05" viewBox="0 0 75.03 44.05">
                                              <g id="Group_1055" data-name="Group 1055" transform="translate(8312 3285)">
                                                <path id="icons8_forward_3" d="M14.981,2.98a2,2,0,0,0-1.395,3.434L32.172,25,13.586,43.586a2,2,0,1,0,2.828,2.828l20-20a2,2,0,0,0,0-2.828l-20-20A2.007,2.007,0,0,0,14.981,2.98Z" transform="translate(-8273.97 -3287.98)" fill="#0a3977"/>
                                                <rect id="Rectangle_2663" data-name="Rectangle 2663" width="71" height="4" rx="2" transform="translate(-8312 -3265)" fill="#0a3977"/>
                                              </g>
                                            </svg>
                                            
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    {/* {
        data.map((item)=>{
            return(
                <div>
                    <p>{item.title}</p>
                </div>
            )
        })
    } */}
	  </>
  )
	  
    


   
  
}
