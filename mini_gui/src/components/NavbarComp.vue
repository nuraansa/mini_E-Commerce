<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img
            src="https://i.postimg.cc/G3GdtszC/Screenshot-2023-08-18-145449-removebg-preview.png"
            alt="logo" style="width: 7rem;"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link p-3" to="/" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link p-3" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link p-3" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link p-3" to="/contact">Contact</router-link>
            </li>
          </ul>
          <div>
            <ul class="d-flex p-3">
              <li class="nav-item p-3" style="list-style-type: none;">
              <router-link class="nav-link" to="/users">User</router-link>
            </li>
              <li class="nav-item p-3" style="list-style-type: none;">
              <router-link class="nav-link" to="/login"><i class="bi bi-box-arrow-in-right"></i></router-link>
            </li>
            <li class="nav-item p-3" style="list-style-type: none;">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #E2D1F9 !important;
  }
  .nav-link {
    color: #317773;
    font-size: 1.2rem;
  }
  .nav-link:hover {
    color: white;
  }
  </style>