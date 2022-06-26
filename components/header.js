class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      /*
 * Menu 
 */

.menu {
 position: fixed;
 top: 0;
 bottom: 0;
 left: 0;
 z-index: 100;
 padding: 48px 0 0;
 box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
.menu {
 width: 100%;
}
}

.menu-sticky {
 position: relative;
 top: 0;
 height: calc(100vh - 48px);
 padding-top: 0.5rem;
 overflow-x: hidden;
 overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.menu .nav-link {
 font-weight: 500;
 color: #333;
}

.menu .nav-link .feather {
 margin-right: 4px;
 color: #727272;
}

.menu .nav-link.active {
 color: #2470dc;
}

.menu .nav-link:hover .feather,
.menu .nav-link.active .feather {
 color: inherit;
}

.menu-heading {
 font-size: 0.75rem;
}

/*
 * Navbar
 */

.navbar-brand {
 padding-top: 0.75rem;
 padding-bottom: 0.75rem;
 background-color: rgba(0, 0, 0, 0.25);
 box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
 top: 0.25rem;
 right: 1rem;
}

.navbar .form-control {
 padding: 0.75rem 1rem;
}

.form-control-dark {
 color: #fff;
 background-color: rgba(255, 255, 255, 0.1);
 border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
 border-color: transparent;
 box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

.bd-placeholder-img {
 font-size: 1.125rem;
 text-anchor: middle;
 -webkit-user-select: none;
 -moz-user-select: none;
 user-select: none;
}

@media (min-width: 768px) {
 .bd-placeholder-img-lg {
  font-size: 3.5rem;
 }
}

.b-example-divider {
 height: 3rem;
 background-color: rgba(0, 0, 0, 0.1);
 border: solid rgba(0, 0, 0, 0.15);
 border-width: 1px 0;
 box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1), inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
 flex-shrink: 0;
 width: 1.5rem;
 height: 100vh;
}

.bi {
 vertical-align: -0.125em;
 fill: currentColor;
}

.nav-scroller {
 position: relative;
 z-index: 2;
 height: 2.75rem;
 overflow-y: hidden;
}

.nav-scroller .nav {
 display: flex;
 flex-wrap: nowrap;
 padding-bottom: 1rem;
 margin-top: -1px;
 overflow-x: auto;
 text-align: center;
 white-space: nowrap;
 -webkit-overflow-scrolling: touch;
}

      </style>
     <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Fintech</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#menuMenu" aria-controls="menuMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>

      <nav id="menuMenu" class="col-md-3 col-lg-2 d-md-block bg-light menu collapse">
        <div class="position-sticky pt-3">
          <ul class="nav d-flex flex-column justify-content-between" style="height: 88vh">
          <div>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../dashboard/index.html">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../movimentacoes/index.html">
                Movimentações
              </a>
            </li>
          </div>
          <div>
            <li class="nav-item">
              <a class="nav-link" href="../login/index.html">
                Logout 
              </a>
            </li>
          </div>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("header-component", Header);
