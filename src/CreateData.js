import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Creatdeta() {
  var [FirstName, setfirstname] = useState("");
  var [surname, setsurname] = useState("");
  var [mobile, setmobile] = useState("");
  var [password, setpassword] = useState("");
  var [newpassword, setnewpassword] = useState("");

  var navigate = useNavigate();

  function handler(e)
  {
    e.preventDefault()
    axios.post("https://6570055109586eff66409733.mockapi.io/nitish",{
        FirstName:FirstName,
        surname:surname,
        mobile:mobile,
        password:password,
        newpassword:newpassword
    }).then(function(){
        navigate("/Login")
    })
  }
  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-5 mt-2 p-3 bg-info" style={{borderRadius:30,textAlign:"center"}}>
            <h1>Sign up form</h1>
            <form onSubmit={handler}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  FirstName
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e)=>setfirstname(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  surname
                </label>
                <input
                  type="text"
                  placeholder="surName"
                  onChange={(e)=>setsurname(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  MobileNumber
                </label>
                <input
                  type="Mobile"
                  placeholder="Mobile Number"
                  onChange={(e)=>setmobile(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e)=>setpassword(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" >
                  conform password
                </label>
                <input
                  type="password"
                  placeholder="conform password"
                  onChange={(e)=>setnewpassword(e.target.value)}
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
             
              <div class="d-grid gap-2" >
                 <button class="btn btn-primary" type="submit" style={{borderRadius:50}}>sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Creatdeta;
