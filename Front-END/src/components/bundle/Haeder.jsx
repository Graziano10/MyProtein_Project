import React from "react";

function Haeder() {
  return (
    <nav class="navbar navbar-expand-lg bg-white fixed-top">
      <div class="container-fluid d-flex justify-content-between">

       <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-start flex-grow-1 pe-3 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
           
          </div>
        </div>

        <div className="icons-container">
               <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <a href=""><img src="src\assets\magnifying-glass.png" alt="" className="icons"/></a>
        </div>
        
          <a class="navbar-brand " href="#">
          <img src="src\assets\fb-image.png" alt="" className="logo"/>
        </a>
        <div className="icons-container">
             <a href=""><img src="src\assets\user.png" alt="" className="icons"/></a>
        <a href=""><img src="src\assets\shopping-cart.png" alt="" className="icons"/></a>
        </div>
        
       
        
       
        
       
      </div>
    </nav>

    
  );
}

export default Haeder;
