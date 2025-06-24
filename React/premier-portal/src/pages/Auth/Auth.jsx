import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Login from './Login'
import Signup from './Signup'

function Auth() {
  
  const[active,setActive] = useState(true)
  
  return (
    <div className='flex flex-col items-center justify-center space-y-5 m-20'>

      {
        active?<h1 className='text-4xl'>Login</h1>:<h1 className='text-4xl'>Sign Up</h1>
      }
      {
        active?<Login></Login>:<Signup></Signup>
      }

      {/* <Button onClick={()=>setActive(!active)}>{active?<p>Login</p>:<p>Register</p>}</Button> */}

    </div>
  )
}

export default Auth