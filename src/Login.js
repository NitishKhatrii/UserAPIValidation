
function Login()
{
  
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5 bg-info p-4 mt-3" style={{borderRadius:30,textAlign:"center"}}>
                    <form>
                    <h1 className="text-center">Log in</h1>
  <div class="mb-3">
    
    <label for="exampleInputEmail1" class="form-label">Email address or phoneNo</label>
    <input type="email" placeholder="Email address or phone no" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" placeholder="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="button" class="btn btn-primary btn-lg">Log in</button>

</form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;