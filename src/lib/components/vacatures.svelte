<div class="vacatures">
  <div class="vacatures-title">Vacatures</div>
  <slot />
</div>

<style>
  .vacatures {
    @apply flex flex-col py-8 border border-slate-200 bg-white min-h-80 p-8 mb-8 rounded-lg;
  }

  .vacatures-title {
    @apply text-2xl lg:text-4xl font-bold text-black mb-4 lg:mb-8;
  }
</style>
