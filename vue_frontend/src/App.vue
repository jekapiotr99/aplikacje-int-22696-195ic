<template>
  <div id="app ">
    <nav class="navbar navbar-expand navbar-dark bg-dark" style="width: 100vw">
      <router-link to="/" class="navbar-brand">22696</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Lista CRUD</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Dodaj element</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
    <router-view />
  </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
