<header class="header">
  <div class="header-bg" style="background-image: url('/bg.jpg');"></div>
  <div class="header-content">
    <div class="header-nav">
      <a href="/" class="header-brand"> IT Recruiter </a>
      <div class="header-spacer"></div>
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
        <div class="header-title">Word lid van ons team!</div>
        <div class="header-desc">
          Ben je geïnteresseerd in een carrière in de steeds veranderende wereld
          van IT? We nodigen je uit om deel uit te maken van ons bruisende team.
          Als dynamisch en vooruitstrevend bedrijf zijn de mogelijkheden
          eindeloos. Ben je klaar om samen met ons deze spannende reis aan te
          gaan?
        </div>
      </div>
    </div>
  </div>
</header>

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

  .header-content {
    @apply mx-auto px-4 lg:px-0 z-20 max-w-full flex flex-col;
    width: 1200px;
  }

  .header-bg {
    @apply absolute left-0 right-0 top-0 bottom-0 bg-cover opacity-50 z-10 bg-no-repeat;
  }

  .header-body {
    @apply w-full flex flex-1 items-center px-8 lg:w-1/2;
  }

  .header-title {
    @apply text-4xl lg:text-6xl font-bold text-white mb-4;
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
    @apply flex items-center gap-4;
  }

  .header-menu a {
    @apply text-white text-base inline-flex p-2;
  }

  .header-menu a:last-child {
    @apply border border-white rounded-md;
  }
</style>
