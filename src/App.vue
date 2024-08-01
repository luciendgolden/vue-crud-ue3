<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink
        class="navbar-brand"
        to="/"
      >
        <img src="/favicon.ico">
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/"
            >
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/users/create"
            >
              Create Person
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container mt-3">
    <RouterView />
  </main>
</template>