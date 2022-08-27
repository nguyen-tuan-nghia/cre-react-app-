import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/#">Pricing</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;