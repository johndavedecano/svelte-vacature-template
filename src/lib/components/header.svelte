<script lang="ts">
  import Icon from "./icon.svelte";
  import MdMenu from "svelte-icons/md/MdMenu.svelte";

  export let settings: any = {};

  let menu = false;
</script>

<header class="header">
  <div
    class="header-bg"
    style={`background-image: url('${settings.image1}');`}
  ></div>
  <div class="header-content">
    <div class="header-nav">
      <a href="/" class="header-brand"> {settings.name} </a>
      <div class="header-spacer"></div>
      <a href="/" class="header-toggle" on:click={() => (menu = !menu)}>
        <Icon icon={MdMenu} />
      </a>
      <ul class="header-menu">
        <li>
          <a href="/#vacatures">Vacatures</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
        <li>
          <a href="/admin">Login</a>
        </li>
      </ul>
    </div>
    <div class="header-body">
      <div>
        <div class="header-title">{settings.headline1}</div>
        <div class="header-desc">
          {settings.description1}
        </div>
      </div>
    </div>
  </div>
</header>

{#if menu}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <ul class="header-menu-mobile" on:click={() => (menu = false)}>
    <li>
      <a href="/#vacatures">Vacatures</a>
    </li>
    <li>
      <a href="/#contact">Contact</a>
    </li>
    <li>
      <a href="/admin">Login</a>
    </li>
  </ul>
{/if}

<style>
  .header {
    @apply flex w-full bg-blue-950 relative;
    min-height: 523px;
  }

  @media only screen and (min-width: 992px) {
    .header {
      min-height: 723px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .header-bg {
      background-position: 0px -200px;
    }
  }

  .header-toggle {
    @apply flex lg:hidden items-center justify-center text-white;
    width: 30px;
    height: 30px;
  }

  .header-menu-mobile {
    @apply w-full rounded-lg bg-blue-950 flex lg:hidden flex-col absolute right-0 left-0 z-20;
    top: 82px;
  }

  .header-menu-mobile a {
    @apply flex px-4 py-2 text-white;
  }

  .header-content {
    @apply mx-auto px-4 lg:px-0 z-20 max-w-full flex flex-col;
    width: 1200px;
  }

  .header-bg {
    @apply absolute left-0 right-0 top-0 bottom-0 bg-cover opacity-50 z-10 bg-no-repeat;
  }

  .header-body {
    @apply w-full flex flex-1 items-center px-0 lg:px-8 lg:w-1/2;
  }

  .header-title {
    @apply text-3xl lg:text-6xl font-bold text-white mb-4 whitespace-nowrap text-ellipsis overflow-hidden;
  }

  .header-desc {
    @apply text-base lg:text-lg text-white;
  }

  .header-spacer {
    @apply flex-1;
  }

  .header-nav {
    @apply flex w-full items-center bg-blue-950 px-4 rounded-lg mt-4;
    height: 60px;
  }

  .header-brand {
    @apply text-white font-bold text-xl;
  }

  .header-menu {
    @apply items-center gap-4 hidden lg:flex;
  }

  .header-menu a {
    @apply text-white text-base inline-flex p-2;
  }

  .header-menu a:last-child {
    @apply border border-white rounded-md;
  }
</style>
