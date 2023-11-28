import React from "react"

function Register(){
 return(
    <section className="vh-100" style={{backgroundColor: 'white'}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign up</h3>
                <div className="form-outline mb-4">
                  <input type="email" id="firstName" className="form-control form-control-lg" placeholder="first name "/>
                  
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="LastName" className="form-control form-control-lg" placeholder="last name " />
                  
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="email " />

                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="password "/>
                 
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="confirm password " />
                 
                </div>
               
                <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

 )
}
export default Register