import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  const [active, setActive] = useState(true);

  return (
    <div>
      <Login></Login>

      {/* <Button onClick={()=>setActive(!active)}>{active?<p>Login</p>:<p>Register</p>}</Button> */}
    </div>
  );
}

export default Auth;
