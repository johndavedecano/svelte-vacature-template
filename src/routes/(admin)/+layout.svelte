<div class="admin">
  <aside class="sidebar">
    <div class="sidebar-top">
      <div class="brand">Admin Panel</div>
    </div>
    <ul class="sidebar-menu">
      <li><a href="/admin">Dashboard</a></li>
      <li><a href="/vacatures">Vacatures</a></li>
      <li><a href="/settings">Settings</a></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  </aside>
  <div class="content">
    <header class="admin-header"></header>
    <main class="main">
      <slot />
    </main>
  </div>
</div>

<style>
  .admin {
    @apply fixed flex overflow-hidden w-full h-full top-0 right-0 left-0 bottom-0 bg-slate-200 items-stretch;
  }

  .content {
    @apply flex-1 flex flex-col relative max-h-screen overflow-y-auto overflow-x-hidden;
  }

  .main {
    @apply flex-1 p-4 lg:p-8;
  }

  .admin-header {
    @apply flex px-4 min-h-20 bg-white shadow-md items-center sticky top-0 right-0 left-0;
  }

  .sidebar {
    @apply bg-slate-900 min-w-80;
  }

  .sidebar-top {
    @apply flex items-center justify-center min-h-20 bg-slate-950;
  }

  .sidebar-menu {
    @apply flex flex-col gap-2;
  }

  .sidebar-menu li a {
    @apply flex items-center px-4 py-3 text-white;
    transition: all 200ms ease-in-out;
  }

  .sidebar-menu li a:hover {
    @apply bg-slate-800;
  }

  .brand {
    @apply text-white text-2xl font-bold;
  }
</style>
