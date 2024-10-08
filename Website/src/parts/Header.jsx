import React from 'react'

export default function Header() {
  return (
    <div>

     {/* header start  */}
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


     <div className="col-4">
     <form className="d-flex justify-content-center"  role="search">
        <input class="form-control me-2" type="search" placeHolder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
     </div>

      <div className="col-4">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Account</a>
        </li>
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Wishlist</a>
        </li>
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Cart</a>
        </li>
      
          </ul>
     
    </div>
        </div>
  </div>
</nav>
    {/* header end */}


    </div>
  )
}

