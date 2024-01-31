import React, { useState } from 'react'
import axios from 'axios'
const Register:React.FC = () => {
  const [visible,setVisible]=useState<boolean>(false);
 const [name,setName]=useState<string>('');
  const [email,setEmail]=useState<string>('');
  const [password,setPassword]=useState<string>('');
  const handleClick=()=>{
    setVisible(!visible);
  }
  const handleSubmit=async(e:any)=>{
    console.log('came here');
    // const user:{ email:string, password:string}={
      
      

    // }
    e.preventDefault();
     axios.post("http://localhost:3000/register",{
      header:{
        "Access-Control-Allow-Origin": "http://localhost:3001/register"
      },
      body:{
        "name":name,
        "email":email,
        "password":password
      }
     }).then(function(result){
      console.log(result);
    })
    .catch(function(error){
      console.log('went wrong');
    })
    
  }
  const handleNameChange=(e:any)=>{
    setName(e.target.value)
  }
  const handleEmailChange=(e:any)=>{
    setEmail(e.target.value)
  }
  const handlePasssChange=(e:any)=>{
    setPassword(e.target.value)
  }
  return (
    <div className='loginView'>
      <div className='loginHeadinDiv'>
        <h1>Register here Here</h1>
      </div>
       <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input id="nameInp" type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" required={true} onChange={handleNameChange}/>
      </div> 

      <div className="input-group mb-3">
        <span className="input-group-text">Mail</span>
        <input id="mailInp" type="text" placeholder='example@gmail.com' className="form-control" aria-label="Amount (to the nearest dollar)" required={true} onChange={(e:any)=>setEmail(e.target.value)}/>
          
      </div>

      <div className="input-group mb-3">
      <span className="input-group-text">Password</span>
        <input id="passInp" type={visible?"text":"password"} className="form-control" placeholder="Password" aria-label="Username" required={true} onChange={handlePasssChange}/>
        <span className="input-group-text" onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg></span>
          </div>
          <span onClick={handleSubmit} className="input-group-text" style={{
            display:'flex',
            justifyContent:'center',
            cursor:'pointer'
          }}>Submit</span>


      </div>
      )
}

export default Register